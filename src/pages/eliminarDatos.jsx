
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function EliminarDatos() {
  const [items, setItems] = useState([]);

  const cargar = async () => {
    const data = await getDocs(collection(db, "items"));
    setItems(data.docs.map(d => ({ ...d.data(), id: d.id })));
  };

  const eliminar = async (id) => {
    await deleteDoc(doc(db, "items", id));
    cargar();
  };

  useEffect(() => { cargar(); }, []);

  return (
    <>
      <h2>Eliminar</h2>
      {items.map(i => (
        <div key={i.id}>
          {i.nombre}
          <button onClick={() => eliminar(i.id)}>Eliminar</button>
        </div>
      ))}
    </>
  );
}
