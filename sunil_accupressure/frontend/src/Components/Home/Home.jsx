import React, { Component } from "react";
import './Home.css';

class Home extends Component {
  state = {};

  onClickHandler=(e)=>{
      let id = e.target.id;
      window.location = `/${id}`;
  }

  render() {
    return (
        <section className="background firstSection" id="home">
            <div className="box-main">
                <div className="firstHalf">
                <p className="text-big"><span>वैद्य</span> Acupressure <span>&</span> Yoga Centre in Delhi</p>
                <p className="text-small">
                Centered at Delhi, वैद्य Acupressure and Yoga Centre is one of the leading acupressure centre 
                engaged in providing qualitative acupressure services for a number of problems of the body. 
                Our services are based on the ancient healing art which involves the pressing the key healing 
                points of the body in order to get relief from a problem. We offer our acupressure services to a 
                number of problems of a human body. Acupressure therapy is a healing art which possess self-curative 
                abilities in it. The acupressure services we provide in our clinic are very effective for the ailments 
                which are directly or indirectly related to stress and anxiety. The acupressure treatment of our clinic 
                is effective in improving an immunes system of a human body thereby providing ultimate results by releasing 
                the tension; increases blood circulation and reducing the pain whatsoever. We have a vast domain expertise in providing best acupressure services to our patients who are suffering from one disorder or the other.
                </p>
                <div className="buttons">
                    <button id="contact" onClick={(e)=>this.onClickHandler(e)}  className="btn btn-warning" >Contact Us!</button>
                    <button id="about" onClick={(e)=>this.onClickHandler(e)} className="btn btn-info">Know More</button>
                </div>
                </div>
                {/* <div className="secondHalf">
                <img src="https://source.unsplash.com/900x900/?yoga,acupressure"alt="img" />
                </div> */}
            </div>
        </section>);
  }
}

export default Home;
