import React, { Component } from 'react';
import Card from '../Card/Card';
import './Cardlist.css';

class CardList extends Component {
    state = {  }
    render() {
        return (
            <div className="card-list">
                { this.props.monsters.map(monster=>{
                    return <Card key={monster.id} monster={monster} />
                })}
            </div>
        );
    }
}

export default CardList;