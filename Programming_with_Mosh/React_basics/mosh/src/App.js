import React, { Component } from 'react';
import Counters from './Components/Counters';

class App extends Component {
  state = {  }
  render() { 
    return ( <React.Fragment>
      <Counters></Counters>
    </React.Fragment> );
  }
}
 
export default App;