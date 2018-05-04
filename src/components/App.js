import React, { PopTypes } from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header heare....</p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
