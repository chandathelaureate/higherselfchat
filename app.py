from flask import Flask, render_template, request
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv(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)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def get_advice():
    prompt = request.form['prompt']
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=prompt,
        temperature=0.7,
        max_tokens=500,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    return render_template('index.html', response=response.choices[0].text)

if __name__ == '__main__':
    app.run(debug=True)
