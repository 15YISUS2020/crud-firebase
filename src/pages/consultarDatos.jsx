
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export default function ConsultarDatos() {
  const [items, setItems] = useState([]);

  const cargar = async () => {
    const data = await getDocs(collection(db, "items"));
    setItems(data.docs.map(d => ({ ...d.data(), id: d.id })));
  };

  const editar = async (id) => {
    const nuevo = prompt("Nuevo nombre");
    await updateDoc(doc(db, "items", id), { nombre: nuevo });
    cargar();
  };

  useEffect(() => { cargar(); }, []);

  return (
    <>
      <h2>Consultar</h2>
      {items.map(i => (
        <div key={i.id}>
          {i.nombre}
          <button onClick={() => editar(i.id)}>Editar</button>
        </div>
      ))}
    </>
  );
}
