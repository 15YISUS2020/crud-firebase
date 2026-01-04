
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    alert("Sesión iniciada");
  };

  return (
    <form onSubmit={login}>
      <h2>Login</h2>
      <input placeholder="Correo" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" onChange={e => setPassword(e.target.value)} />
      <button>Entrar</button>
    </form>
  );
}
