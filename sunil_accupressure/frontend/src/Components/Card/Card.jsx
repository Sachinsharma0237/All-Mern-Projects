import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = { 
        
     }
    render() {
        let { disease } = this.props;
        return (
            <div className="card-container">
                <img className="img" src={disease.image} alt="img" />
                <h2>{disease.name}</h2>
                {/* <p>{}</p> */}
            </div>
        );
    }
}

export default Card;