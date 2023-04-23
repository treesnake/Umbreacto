import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ContentBlocks } from './components/ContentBlocks';

function App() {
  return (
    
    <div className="App">
      <Layout>
      <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload human paradox banana.
        </p>
        <ContentBlocks/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
