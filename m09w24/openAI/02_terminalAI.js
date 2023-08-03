// We want to create an app that allows us to communicate with chat-gpt via our terminal
// Already established how we connect to openAI

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const { orgKey, apiKey } = require("./env");
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    organization: orgKey,
    apiKey: apiKey
})

const openai = new OpenAIApi(config);

readline.question("Hello, I am your virtual assistant, how can I help you?\n", (userInput) => {
    openai.createChatCompletion({
        "model": "gpt-3.5-turbo",
        // prompts
        "messages": [{ "role": "system", "content": "Please be a bit more formal with your responses" }, { "role": "user", "content": `${userInput}` }],
        // Temperature 0-2
        "temperature": 0.7,
        // "max_tokens": 1

    }).then((response) => {
        // console.log(response.data.choices[0])
        console.log(response.data.choices[0].message.content)
        readline.close();
    })
})
