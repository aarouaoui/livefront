import React , {Component} from "react";
import List from "./List"

class Sns extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards : []
        }
        this.onMessage();
    }

    onMessage = () => {   

    }   
     
    render() {
       
        return (
            <List elements={this.state.cards} elementClass = "alert alert-success"/>
        )
    }
}

export default Sns;