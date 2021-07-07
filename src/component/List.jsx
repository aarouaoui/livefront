import React , {Component} from "react";

class List extends Component {

    render() {
 
        const elts = this.props.elements.reverse().map((element) => 
        <div class="card border-primary mb-3">
            <img class="card-img-top" style={{height: '250px', width: '100%'}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%221153%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201153%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17a7c3aa448%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A58pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17a7c3aa448%22%3E%3Crect%20width%3D%221153%22%20height%3D%22250%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22409.515625%22%20y%3D%22150.8%22%3E1153x250%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">{element.title}</h5>
                <p class="card-text">{element.content}</p>
                <a href="google.com" class="btn btn-primary">Lire l'article</a>
            </div>
        </div>
        )
        return (
            <div class="container">
                {elts}
            </div>
        )
    }
}

export default List;