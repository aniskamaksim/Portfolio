import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Pages} from "./Components/Pages";
import {Layout} from "./layout/Layout";

function App() {
  return (
      <HashRouter>
          <Layout>
              <Pages />
          </Layout>
      </HashRouter>
  );
}

export default App;
