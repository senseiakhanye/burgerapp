import React from 'react';
import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout> 
    </div>
  );
}

export default App;
