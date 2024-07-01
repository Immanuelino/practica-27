// src/Content.js
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const Content = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(['Elemento 1', 'Elemento 2', 'Elemento 3']);
  }, []);

  return (
    <main>
      <h2>Contenido Principal</h2>
      <p>Esta es la sección principal de la aplicación. A continuación se muestra una lista de elementos:</p>
      <ItemList items={items} />
    </main>
  );
};

export default Content;
