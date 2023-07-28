import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands"
import './App.css';
import { useState } from "react";
function App() {

  const [currentIndex, setCurrentIndex] = useState(1)
  // ["Ay Caramba","Background Noise","Clapping(Action)","Laughing","Sneezing","Whoosh"]
  const emojiLabels = ['🛹', '🤐', '👏', '🤣','🤧','💨'];
  // more documentation available at
    // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

    // the link to your model provided by Teachable Machine export panel
    const URL = "http://localhost:3000/model/";

    const createModel= async() => {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    const listener = async() => {
        const recognizer = await createModel();
        // const classLabels = recognizer.wordLabels(); // get class labels
        // const labelContainer = document.getElementById("label-container");
        // for (let i = 0; i < classLabels.length; i++) {
        //     labelContainer.appendChild(document.createElement("div"));
        // }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = Array.from(result.scores); // probability of prediction for each class
            // render the probability scores per class
            // Find the biggest number out of these scores
            const highestScore = Math.max(...scores)
            const indexOfTheHighestScore = scores.indexOf(highestScore)
            console.log(indexOfTheHighestScore)
            indexOfTheHighestScore !== 1 && setCurrentIndex(indexOfTheHighestScore);
            // Set the highestScore



            // [0.028038211166858673,0.0048119137063622475,0.8005107641220093,0.13555964827537537,0.0036896378733217716,0.02738988772034645]
            // ["Ay Caramba","Background Noise","Clapping(Action)","Laughing","Sneezing","Whoosh"]

        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }
  return (
    <div className="App">
      <h1 className="App-logo">{emojiLabels[currentIndex]}</h1>
      <h2>Voice to Emoji</h2>
      <button onClick={listener}>Start Listening</button>
    </div>
  );
}

export default App;
