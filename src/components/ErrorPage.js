import React from "react";
import { Link } from "react-router-dom";
import { Header } from "semantic-ui-react";

const ErrorPage = () => {
    return (
        <>
            <Header size="large">Item no encontrado</Header>
            <Header sub><Link to="/">Por favor vuelva al inicio</Link></Header>
        </>
    )
};

export default ErrorPage;