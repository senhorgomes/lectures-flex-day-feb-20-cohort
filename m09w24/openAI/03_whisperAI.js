// How can we grab an audio, and transcribe it using openAI?
const {orgKey, apiKey} = require("./env");
const { Configuration, OpenAIApi } = require("openai");
const fs = require('fs');
const config = new Configuration({
    organization: orgKey,
    apiKey: apiKey
})
const audioFile = fs.createReadStream("OpenAiSample(2).m4a")
const openai = new OpenAIApi(config);

openai.createTranscription(audioFile, "whisper-1", undefined, "text", 0.7, "fa").then((response)=>{
    console.log(response.data)
})
