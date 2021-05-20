import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counter : 0,
        tags : ['tag1', 'tag2', 'tag3', 'tag4']
     }
    renderTags =()=>{
        let tags = this.state.tags;
        if(tags==0){
            return <ul>Sorry! there's no tags</ul>
        }else{
            return <ul>{ tags.map( tag=> <li key={tag}>{tag}</li> ) }</ul>
        }
    }

    render() { 
        let tags = this.state.tags;
        return ( 
            <div> { tags.length === 0 && "please create a new tag" } 
                { this.renderTags()}
            </div>
         );
    }

}
 
export default Counter;