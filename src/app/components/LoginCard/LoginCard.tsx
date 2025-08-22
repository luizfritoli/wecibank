"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@/lib/account";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [correct, setCorrect] = useState<boolean>(false);
  const [error, setError] = useState<string>("")
  const router = useRouter();

const logIn = (): void => {
  const data: User[] = JSON.parse(localStorage.getItem("users") || "[]");
  const userFound = data.find(u => u.email === email);

  if (!userFound) {
    setError("Email inválido");
    return;
  }

  if (userFound.password !== password) {
    setError("Senha incorreta");
    return;
  }
  localStorage.setItem("currentUser", JSON.stringify(userFound));
  localStorage.setItem("isLogged", "true");
  router.push("/");
};
  return (
    <div className="bg-white h-auto w-90 rounded-3 p-2">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="align-self-center mb-4 text-center">
          Bem-vindo de volta!
        </h1>
        <form
          action="login"
          className="d-flex flex-column gap-4 justify-content-start align-items-center h-100"
        >
          <label>
            Email
            <br />
            <input
              type="email"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control border-info rounded-1`}
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control border-info rounded-1`}
            />
          </label>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={logIn}
          >
            Entrar
          </button>
          <span>
            Não possui conta? <Link href="/register">Registre-se</Link>.
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
