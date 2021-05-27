import React, { Component } from 'react';
import "./Templates";
import "./Templates.css";
class Templates extends Component {
    state = { 
        skins: [
        {id:"skin1", path:"./skins/skin1.svg"},
        {id:"skin2", path:"./skins/skin2.svg"},
        {id:"skin3", path:"./skins/skin3.svg"},
        {id:"skin4", path:"./skins/skin4.svg"},
        {id:"skin5", path:"./skins/skin5.svg"},
        {id:"skin6", path:"./skins/skin6.svg"},
        {id:"skin7", path:"./skins/skin7.svg"},
        {id:"skin8", path:"./skins/skin8.svg"}
            ]
     }

     handleChooseTemplate =()=>{
         this.props.history.push("/contact");
        //  window.location = '/contact';  //It work the same as above but it'll refresh the page
     }

    render() { 
        return ( <div className="templates">
            {this.state.skins.map((skin)=>{
                    return <div key={skin.id} className="template">
                        <div className="template-image">
                            <img src={skin.path} alt="" />
                        </div>
                        <div className="choose-template" onClick={this.handleChooseTemplate}>Choose Template</div>
                    </div>
            })}
        </div> );
    }
}
 
export default Templates;