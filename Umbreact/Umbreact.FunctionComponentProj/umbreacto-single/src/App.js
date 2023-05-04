import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from './Components/NavMenu.js';
import NormalPage from './Components/NormalPage.js';

function App() {

  const [menuItems, setMenuItems] = useState([]);
  const [pageHeaderText, setPageHeaderText] = useState([]);
  const [pageHeaderSubtext, setPageHeaderSubtext] = useState([]);
  const [pageContentBlocks, setPageContentBlocks] = useState([]);

  function GetMenuItems()
  {
    fetch('https://localhost:44349/Umbraco/Api/Nav/GetNavItems')
        .then(response => response.json())
        .then(data => {
          setMenuItems(data);
        });
  }

  function GetPageProps()
  {
    fetch('https://localhost:44349/Umbraco/Api/PageContent/GetPageContentByUrl?url=' + window.location.pathname)
        .then(response => response.json())
        .then(data => {
          setPageHeaderText(data.find(element => element.Alias == "headerText").Value);
          setPageHeaderSubtext(data.find(element => element.Alias == "headerSubtext").Value);
        })   
  }

  function GetContentBlocks()
  {
    fetch('https://localhost:44349/Umbraco/Api/ContentBlock/GetContentBlocksByUrl?url=' + window.location.pathname)
        .then(response => response.json())
        .then(data => {
          setPageContentBlocks(data);
        })
  }

  useEffect(() => 
  { 
    GetMenuItems();
    GetPageProps();
    GetContentBlocks();
  }, []);

  return (
    <div className="App">
       <NavMenu NavItems={menuItems} />
       <NormalPage headerText={pageHeaderText} headerSubtext={pageHeaderSubtext} blocks={pageContentBlocks}  />
    </div>
  );
}

export default App;
