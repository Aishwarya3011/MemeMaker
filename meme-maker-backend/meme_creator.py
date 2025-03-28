# meme_creator.py
import io
import base64
import requests
from PIL import Image, ImageDraw, ImageFont

def create_meme(image_url, meme_text, font_path="impact.ttf", font_size=2000):
    response = requests.get(image_url)
    if response.status_code != 200:
        raise Exception("Error downloading the image")
    image = Image.open(io.BytesIO(response.content)).convert("RGB")
    
    draw = ImageDraw.Draw(image)
    
    buffered = io.BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return img_str
