import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout'
import IssuesList from './components/Facebook/IssuesList/index'
import Detail from './pages/Detail'

const App = () => {
  <div className="App">
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index path='/' element={<IssuesList />}/>
      <Route path='/detail/:id' element={<Detail />}/>
    </Route>
  </Routes>
</div>
};

export default App;
