import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomContext from "./context/CartContext";


const App = function() {
    return (
        <CustomContext>
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
        </CustomContext>
    )
}

export default App;