import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        const {students} = this.props;

        return (
            <div className="card-list">
                {students.map(student => {
                    return (
                        <Card key={student.id} students={student}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;