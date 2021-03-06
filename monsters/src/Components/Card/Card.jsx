import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {  }
    render() {
        let { monster } = this.props;
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>
        );
    }
}

export default Card;