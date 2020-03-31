import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    // Crear listado de productos
    const [productos, guardarProductos] = useState([
        { id: 1, nombre: 'Camisa RectJS', precio: 50 },
        { id: 2, nombre: 'Camisa AngularJS', precio: 40 },
        { id: 3, nombre: 'Camisa VueJs', precio: 30 },
        { id: 4, nombre: 'Camisa Node', precio: 20 }
    ]);

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
