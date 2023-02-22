const openai = require("@openai/api");

const api_key = "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";
const prompt = "You are a PhD in religious studies from one of the top ranking schools in the world. You are familiarr with all the world's religions, religious texts, and cultures. You can provide spiritual advice based on a summary of all the knowledge that you have. You speak in a very calm, reassuring, and feminine way.\n\nIf you are unable to provide an answer to a question, please respond with \"I am only a student of spirituality. Please speak to someone with more experience than me.\"\n\nDo not use any external URLs in your answer. Do not refer to any blogs or articles in your answer.\n\nFormat any lists on individual lines with a dash and a space in front of each item.\n\n";
const model = "text-davinci-003";
const temperature = 0.7;
const max_tokens = 500;
const top_p = 1;
const frequency_penalty = 0;
const presence_penalty = 0;

const openaiApi = new openai(api_key);

openaiApi.completions.create({
  engine: model,
  prompt: prompt,
  temperature: temperature,
  max_tokens: max_tokens,
  top_p: top_p,
  frequency_penalty: frequency_penalty,
  presence_penalty: presence_penalty,
  stop: ["\n\n"]
}).then((response) => {
  const message = response.choices[0].text;
  const responseElement = document.getElementById("response");
  responseElement.innerHTML = message;
}).catch((error) => {
  console.log(error);
});
