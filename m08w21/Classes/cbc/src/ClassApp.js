import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassFetch from './components/ClassFetch';
//This is built into react, and anytime we are building class based components
//We need to extend them from the class Component
class ClassApp extends Component {
    constructor(){
        super(); //This retrieves the component constructor
    }
    render(){
        return (
          <div className="App">
            <header className="App-header">
                <ClassFetch/>
                {/* <ClassCounter/> */}
                {/* <Counter/> */}
              {/* <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.props.sentence}
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
            </header>
          </div>
        );
    }
}
export default ClassApp;
// function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
  
//   export default App;