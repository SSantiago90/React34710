import React, { useEffect, useState } from "react";
import dataJSON from "../../data/data";
import CardDetail from "../Card/CardDetail";
import { useParams } from "react-router-dom";
import { Metronome } from "@uiball/loaders";

import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer({ itemid }) {
  const [item, setItem] = useState();
  const { id } = useParams();

  function getToDoById(id) {
    return new Promise((resolve, reject) => {
      const todosCollectionRef = collection(firestoreDB, "movies");
      const docRef = doc(todosCollectionRef, id);

      getDoc(docRef).then((snapshot) => {
        resolve({ ...snapshot.data(), id: snapshot.id });
      });
    });
  }

  useEffect(() => {
    getToDoById(id)
      .then((respuesta) => setItem(respuesta))
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="main">
      {item ? (
        <CardDetail
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          category={item.genre}
          stock={item.stock}
        />
      ) : (
        <Metronome size={90} speed={1.6} color="lightblue" />
      )}
    </div>
  );
}

export default ItemDetailContainer;
