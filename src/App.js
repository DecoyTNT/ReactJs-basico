import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    // Obtener el año
    const fecha = new Date().getFullYear();

    return (
        <Fragment>
            <Header titulo="Tienda virtual" />
            <Footer fecha={fecha} />
        </Fragment>
    );
}

export default App;
