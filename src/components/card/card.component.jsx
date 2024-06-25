import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {

        const {students} = this.props;
        const {id, name, house, image} = students;

        return (
            <div className="card-container" key={id}>
            {/* <img className="img" alt="picture" src={image}/> */}
            <h2>{name}</h2><h3>{house}</h3>
            </div>
        )
    }
}

export default Card;