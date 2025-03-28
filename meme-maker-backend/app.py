# app.py
import torch
from types import ModuleType

# Monkey-patch torch.compiler if it doesn't exist.
if not hasattr(torch, "compiler"):
    class DummyCompiler:
        @staticmethod
        def disable(*args, **kwargs):
            def decorator(fn):
                return fn
            return decorator
    torch.compiler = DummyCompiler()

# Forces a dummy torch._dynamo with mark_static_address. This is required for TorchScript tracing. 
if hasattr(torch, "_dynamo"):
    setattr(torch._dynamo, "mark_static_address", lambda *args, **kwargs: None)
else:
    dummy_dynamo = ModuleType("_dynamo")
    dummy_dynamo.mark_static_address = lambda *args, **kwargs: None
    torch._dynamo = dummy_dynamo

import torch.nn as nn
_original_load_state_dict = nn.Module.load_state_dict

def patched_load_state_dict(self, state_dict, strict=True, **kwargs):
    kwargs.pop('assign', None)
    return _original_load_state_dict(self, state_dict, strict=strict)

nn.Module.load_state_dict = patched_load_state_dict

#########

import os
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import traceback
from meme_creator import create_meme

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY

app = Flask(__name__)
CORS(app)  

@app.route("/")
def index():
    return "Meme-maker backend server is running"

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    if not data or "image_url" not in data:
        return jsonify({"error": "No image URL provided"}), 400

    image_url = data["image_url"]
    print("Received image URL:", image_url)

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4-turbo",
            messages=[
                {
                    "role": "system",
                    "content": [
                        {
                            "type": "text",
                            "text": (
                                "You are a helpful assistant. Your task is to generate meme captions for the image. "
                                "Avoid sensitive topics like religion, race, politics, nationality etc."
                            )
                        }
                    ]
                },
                {
                    "role": "user",
                    "content": [
                        {"type": "image_url", "image_url": {"url": image_url}},
                        {"type": "text", "text": "Generate a meme from the image that is coherent, relatable and funny. Try to incorporate themes of sarcasm. Just one line."}
                    ]
                }
            ],
            max_tokens=100
        )
        generated_text = response["choices"][0]["message"]["content"]
        meme_image_base64 = create_meme(image_url, generated_text)
        
        return jsonify({
            "text": generated_text,
            "meme_image": meme_image_base64
        })
    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "Error during inference", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
