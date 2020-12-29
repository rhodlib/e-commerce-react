import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = function() {
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Titulo provisional!"/>
        </>
    )
}

export default App;