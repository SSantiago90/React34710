import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Metronome } from "@uiball/loaders";

import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

/* 1. todos los items */
const getItemsFromDB = () => {
  return new Promise((resolve) => {
    const todosCollection = collection(firestoreDB, "movies");

    getDocs(todosCollection).then((snapshot) => {
      const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      resolve(docsData);
    });
  });
};

/* 2. Items segun categoria  */
const getItemsFromDBbyCategory = (category) => {
  return new Promise((resolve) => {
    const todosCollectionRef = collection(firestoreDB, "todos");

    const q = query(todosCollectionRef, where("genre", "==", category));

    getDocs(q).then((snapshot) => {
      const docsData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      resolve(docsData);
    });
  });
};

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItemsFromDB()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(products);

  if (products.length === 0) {
    return (
      <div className="main container mx-auto mt-5">
        <Metronome size={90} speed={1.6} color="lightblue" />
      </div>
    );
  }

  return (
    <div className="main container mx-auto mt-5">
      {products.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            category={item.genre}
            img={item.img}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
