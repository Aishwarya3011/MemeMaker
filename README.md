# MemeMaker

Transform images to memes

## 1. Prerequisites

You will need an openai api key to work with this project. Log in to your open ai account and create a new secret key https://platform.openai.com/settings/organization/api-keys[here].

Once you have the api key, create a .env file in MemeMaker/meme-maker-backend folder. Paste this line in the .env file:
OPENAI_API_KEY=<Your_OPENAI_KEY>

Save the changes.

## 2. How to start the flask backend server

Navigate to backend folder

```
cd MemeMaker/meme-maker-backend
```

Create a virtual environment (recommended)

```
python -m venv env
source env/bin/activate
```

Install requirements

```
pip install --upgrade --force-reinstall -r requirements.txt
```

Lastly, start the server 

```
python app.py
```

Backend server will start at 0.0.0.0:5001

## 3. How to start the app

Navigate to frontend folder

```
cd MemeMaker/meme-maker
```

Install dependencies

```
npm install
```

Run the app

```
npm start
```

The Meme Maker app will start at localhost:3000 on your machine.

## 4. Project info

1. The background image for the project has been generated with OpenAI Dall-E.
2. Project frontend s build with React.
3. Project backend uses Flask API
4. Generation has been done with OpenAI Gpt 4 Turbo model
