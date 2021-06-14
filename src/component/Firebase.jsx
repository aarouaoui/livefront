import React , {Component} from "react";
import List from "./List"
import firebase from "firebase/app";
import "firebase/messaging";
class Firebase extends Component {

    constructor(props) {
        super(props);
       
        this.state = {
            cards : []
        }  
    }

    onMessage = () => {
        firebase.messaging().onMessage((payload) => {
            const cards = [ ... this.state.cards]
            cards.push({content: payload.data.content})
            this.setState({cards})
        })
    }

    render() {
        this.onMessage();
        return (
            <List elements={this.state.cards} elementClass = "alert alert-primary" />
        )
    }
}

export default Firebase;