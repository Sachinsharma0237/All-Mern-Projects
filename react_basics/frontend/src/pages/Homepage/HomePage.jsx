import React from 'react';
import './HomePage.scss';

export default function HomePage(){
    return(
        <div className="homepage">
            <div className="directory-menu">
                
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOPNOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">SHOPNOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMEN</h1>
                        <span className="subtitle">SHOPNOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOPNOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}