import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import Escritorio from './Pages/Escritorio';
import AreasAtuacao from './Pages/AreasAtuacao';
import Adovogados from './Pages/Advogados/index';
import FaleConosco from './Pages/FaleConosco';
import NotFound from './Pages/NotFound';

import { BrowserRouter,Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/escritorio' exact={true} component={Escritorio} />
        <Route path='/atuacao' exact={true} component={AreasAtuacao} />
        <Route path='/advogados' exact={true} component={Adovogados} />
        <Route path='/fale-conosco' exact={true} component={FaleConosco} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

