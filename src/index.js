import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import News from './Pages/News';
import Weather from './Pages/Weather';






import './index.css';

ReactDOM.render(
<BrowserRouter>
<Switch>
<Route exact path='/' component={Homepage}/>
<Route path='/News' component={News}/>
<Route path='/Weather' component={Weather}/>
</Switch>
</BrowserRouter>,

document.getElementById('root')
);

