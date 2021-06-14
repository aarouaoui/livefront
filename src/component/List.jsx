import React , {Component} from "react";

class List extends Component {

    render() {
 
        const elts = this.props.elements.map((element) => <li class={this.props.elementClass}>{element.content}</li>)
        return (
            <ul>
                {elts}
            </ul>
        )
    }
}

export default List;