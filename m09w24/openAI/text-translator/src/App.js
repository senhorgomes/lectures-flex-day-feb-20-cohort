import { useState } from 'react';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import { Configuration, OpenAIApi } from 'openai';
function App() {
  const [textToBeTranslated, setTextToBeTranslated] = useState("");
  const [translatedTextLanguage, setTranslatedTextLanguage] = useState("English");
  const [translatedText, setTranslatedText] = useState("")
  // const { Configuration, OpenAIApi } = require("openai");

  const config = new Configuration({
    organization: process.env.REACT_APP_ORG_KEY,
    apiKey: process.env.REACT_APP_API_KEY
  })

  const openai = new OpenAIApi(config);


  const makeOpenAIapiCall = () => {
    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": `Translate the following text into ${translatedTextLanguage}, if the text doesn't need to be translated, just return the text as it is`
        }, {
          "role": "user",
          "content": `${textToBeTranslated}`
        }
      ],
      // Temperature 0-2
      temperature: 0.7,
    }).then((response) => {
      setTranslatedText(response.data.choices[0].message.content)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Text to be translated</h2>
        <input type="text" onChange={(event) => setTextToBeTranslated(event.target.value)}></input>
        {/* New component for a user to select a language */}
        <LanguageSelector setLangauge={setTranslatedTextLanguage} />
        <h2>You have selected {translatedTextLanguage}</h2>
        <button onClick={() => makeOpenAIapiCall()}>Translate the text!</button>
        <h2>{translatedText}</h2>
      </header>
    </div>
  );
}

export default App;
