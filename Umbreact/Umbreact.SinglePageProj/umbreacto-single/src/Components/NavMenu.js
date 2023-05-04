import React, { useState } from 'react';

function NavMenu(props) 
{
    const [menuToggle, setMenuToggle] = useState(false);

    function toggleMenu() {
        setMenuToggle(!menuToggle);
    }


    return ( 
        <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" title="Toggle Navigation Menu" onClick={toggleMenu}><i className="fa fa-bars"></i></a>
          {props.NavItems.map(navItem => {
                        return (
                          <a key={navItem.DisplayId} href={`${navItem.Url}`} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{navItem.Label}</a>
                          );
                    })}
        </div>

        <div id="navDemo"  className={"w3-bar-block w3-white  w3-hide-large w3-hide-medium w3-large " + (menuToggle? "w3-hide" : "")}>
          
          {props.NavItems.map(navItem => {
                        return (
                          <a key={navItem.DisplayId} href={`${navItem.Url}`} className="w3-bar-item w3-button w3-padding-large">{navItem.Label}</a>
                          );
                    })}
        </div>
    </div>
    );
}

export default NavMenu;