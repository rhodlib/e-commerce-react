import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = function() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer greeting="Titulo provisional!"/>
                </Route>
                <Route path="/category/:categoryId">
                    <ItemListContainer greeting="Titulo provisional!"/>
                </Route>
                <Route path="/item/:itemId">
                    <ItemDetailContainer/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;