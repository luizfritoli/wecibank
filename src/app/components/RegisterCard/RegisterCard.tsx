"use client";

import Link from "next/link";
import { ReactNode, useReducer, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface StateProps {
  user: string;
  email: string;
  emailValid: boolean;
  password: string;
  confirmPassword: string;
}

type UserAction =
  | { type: "SET_USER"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string };

const reducer = (state: StateProps, action: UserAction): StateProps => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_EMAIL":
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(action.payload);
      return { ...state, email: action.payload, emailValid };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const RegisterCard = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  const [isFormValid, setIsFormValid] = useState<boolean | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    user: "",
    email: "",
    emailValid: true,
    password: "",
    confirmPassword: "",
  });

  const validateForm = (): boolean => {
    if (
      password.length < 8 ||
      confirmedPassword.length < 8 ||
      password !== confirmedPassword ||
      !state.password ||
      !state.email ||
      state.user
    )
      return false;

    return true;
  };

  return (
    <div className="bg-white h-auto w-90 rounded-3 p-2">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="align-self-center mb-4">Bem-vindo ao WiceBank!</h1>
        <span className="text-danger fw-medium fs-6 mb-4">
          Observação: Como não é um aplicativo de banco real, dados sensíveis,
          como CPF ou RG não serão necessários.
        </span>
        <form
          action="login"
          className="d-flex flex-column gap-4 justify-content-start align-items-center h-100"
        >
          <label>
            Nome completo
            <br />
            <input
              type="text"
              value={state.user}
              onChange={(e) =>
                dispatch({ type: "SET_USER", payload: e.target.value })
              }
              placeholder="Insira seu nome"
              className="border-info rounded-1 form-control"
            />
          </label>
          <label>
            Email
            <br />
            <input
              type="email"
              placeholder="Insira seu email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
              className={`form-control border-info rounded-1 ${!state.emailValid ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">Digite um email válido.</div>
          </label>
          <label>
            Senha
            <br />
            <input
              type="password"
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-info rounded-1 form-control"
            />
          </label>
          <label>
            Confirmação da senha
            <br />
            <input
              type="password"
              placeholder="Confirme sua senha"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
              className="border-info rounded-1 form-control"
            />
          </label>
          {isFormValid === false && confirmedPassword !== password && (
            <span className="text-danger text-center"><AiOutlineClose /> As senhas não coincidem!</span>
          )}
          {isFormValid === false && password.length < 8 && (
            <span className="text-danger text-center">
              <AiOutlineClose /> A senha deve ter pelo menos 8 caracteres!
            </span>
          )}
          {isFormValid === false &&
            (!state.password || !state.user || !state.email) && (
              <span className="text-danger text-center">
                <AiOutlineClose /> Há campos que necessitam ser preenchidos!
              </span>
            )}
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              const valid = validateForm();
              setIsFormValid(valid);
            }}
          >
            Entrar
          </button>
          <span>
            Já possui conta? <Link href="/login">Entre aqui</Link>.
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
