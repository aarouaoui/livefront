import React , {Component} from "react";
import List from "./List"
import { w3cwebsocket as W3CWebSocket } from "websocket";

class Websocket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards : [],
        }
        this.client = new W3CWebSocket('wss://m1l7vq7ida.execute-api.us-east-2.amazonaws.com/production');
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          this.client.onmessage = (message) => {
            console.log(message.data);
            const cards = [ ... this.state.cards]
            cards.push({content: message.data})
            this.setState({cards})
          }; 
    }

    onMessage = () => {
        this.client.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          this.client.onmessage = (message) => {
            console.log('message');
          }; 
          this.client.onerror = (error) => {
              console.log(error);
          }
    }  

    render() {
        return (
            <List elements={this.state.cards} elementClass = "alert alert-danger"/>
        )
    }
}

export default Websocket;