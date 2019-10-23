import React, {Component} from 'react';
import Album from "./components/Album";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<Album/>);
    }
}

export default App;