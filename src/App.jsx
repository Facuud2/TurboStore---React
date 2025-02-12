// App.jsx
import React from 'react';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import Footer from './components/Footer';

const App = () => {
  // Datos de productos (simulados)
  const products = [
    {id:0, name: 'nombre', price: 0, image: 'https://placehold.co/200'},
    { id: 1, name: 'Desarrollo de API RESTful', price: 500, image: 'https://blog.back4app.com/wp-content/uploads/2023/04/rest-cover.webp' },
    { id: 2, name: 'Optimización SEO Avanzado', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq5mXVNTcIWIkSOtht64GgVxKeBWqFxK5ZQ&s' },
    { id: 3, name: 'Mantenimiento de Base de Datos', price: 200, image: 'https://placehold.co/200' },
    { id: 4, name: 'Diseño de Sitio Web Ecommerce', price: 800, image: 'https://placehold.co/200' },
    { id: 5, name: 'Integración de Pagos Online', price: 400, image: 'https://placehold.co/200' },
    { id: 6, name: 'Consultoría en Ciberseguridad', price: 600, image: 'https://placehold.co/200' },
    { id: 7, name: 'Desarrollo de Aplicaciones Móviles', price: 1000, image: 'https://placehold.co/200' },
    { id: 8, name: 'Automatización de Procesos RPA', price: 700, image: 'https://placehold.co/200' }
];

  return (
    <div>
      <Header />
      <ProductContainer products={products} />
      <Footer />
    </div>
  );
};

export default App;