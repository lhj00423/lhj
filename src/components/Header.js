import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div id="hd-top">
            <div id="ddd">
              <div id="headerborder">
                <p id="DEVELOPER">DEVELOPER LHJ</p>
                <h1 id="PORTFOLIO">PORTFOLIO WEBSITE💻</h1>
              </div>
            </div>
            <div >
                <ul id="headerul">
                    <li id="headerli"><p>ABOUT</p></li>
                    <li id="headerli" ><p> PROJECT</p></li>
                    <li id="headerli" ><p>CONTACT</p></li>
                 <div id="light-btn">
                    <span></span>
                  </div>   
                </ul>
              </div>
          </div>
        </div>
    );
};

export default Header;