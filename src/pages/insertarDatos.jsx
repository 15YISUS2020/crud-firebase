
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function InsertarDatos() {
  const [nombre, setNombre] = useState("");

  const guardar = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "items"), { nombre });
    setNombre("");
  };

  return (
    <form onSubmit={guardar}>
      <h2>Insertar</h2>
      <input value={nombre} onChange={e => setNombre(e.target.value)} />
      <button>Guardar</button>
    </form>
  );
}
