// How can we use the OpenAI API?
const {orgKey, apiKey} = require("./env");
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    organization: orgKey,
    apiKey: apiKey
})

const openai = new OpenAIApi(config);

openai.createChatCompletion({
    "model": "gpt-3.5-turbo",
    // prompts
    "messages": [{"role":"system", "content":"Please be a bit more formal with your responses"},{"role": "user", "content": "Say good morning"}],
    // Temperature 0-2
    "temperature": 0.7,
    "max_tokens": 1

}).then((response)=>{
    console.log(response.data.choices[0])
    console.log(response.data.choices[0].message.content)
})