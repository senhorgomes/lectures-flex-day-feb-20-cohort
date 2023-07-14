import {Component} from 'react';

class ClassCounter extends Component {
    constructor(){
        super(); //This retrieves the component constructor
        this.state = {count: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (){
        this.setState({count: this.state.count + 1});
    }
    render(){
        return (
            <div>
              <h2>Amount of times the button has been clicked: {this.state.count}</h2>
              <button onClick={this.handleClick}>Click Me!</button>
            </div>
          );
    }
}
export default ClassCounter;
// import {useState} from 'react';

// function Counter() {
//     const [count, setCount] = useState(0)
//     const handleClick = () =>{
//         setCount((prev)=>(prev + 1))
//     }
//     return (
//       <div>
//         <h2>Amount of times the button has been clicked: {count}</h2>
//         <button onClick={handleClick}>Click Me!</button>
//       </div>
//     );
//   }
  
//   export default Counter;