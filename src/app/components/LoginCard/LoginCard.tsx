import Link from "next/link";

const LoginCard = () => {
  return (
    <div className="bg-white h-50 w-85 rounded-3">
      <h1>Bem-vindo de volta!</h1>
      <form
        action="login"
        className="d-flex flex-column gap-4 justify-content-start align-items-center h-100 mt-8"
      >
        <label>
          Email
          <br />
          <input type="email" />
        </label>
        <label>
          Password
          <br />
          <input type="password" />
        </label>
        <button type="submit">Entrar</button>
        <span>
          Não possui conta? <Link href="/register">Registre-se</Link>.
        </span>
      </form>
    </div>
  );
};

export default LoginCard;
