import React from 'react';
import './App.css';
import QRCode  from 'qrcode.react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Simple QRCode generator with react."};
  }
  changeText=(event)=>{
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <QRCode size="500" value={this.state.value}/>
          <p>
            Simple <code>QRCode</code> generator with react
          </p>
         <input className="inputStyle" type="text" value={this.state.value} onChange={this.changeText} ></input>
        </header>
      </div>
    );
  }
}

export default App;
