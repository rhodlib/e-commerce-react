import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = function() {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Titulo provisional!"/>
            <ItemDetailContainer/>
        </>
    )
}

export default App;