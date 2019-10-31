import React, {Component} from 'react';
import MyAlbum from "./components/MyAlbum.js";
import axios from "axios";

class App extends Component {

    state = {
        products: [

        ]
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums?_limit=5')
            .then((response) => {
                // handle success
                console.log(response);
                this.setState({products: response.data});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    render() {
        return (<MyAlbum products={this.state.products}/>);
    }
}

export default App;