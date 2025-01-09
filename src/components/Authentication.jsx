import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Authentication = ({ handleCloseModal }) => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState(null);

  const {
    globalUser,
    globalData,
    setGlobalData,
    isLoading,
    signup,
    login,
    resetPassword,
    logout,
  } = useAuth();

  const handleAuth = async () => {
    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 6 ||
      isAuthenticating
    )
      return;

    try {
      setIsAuthenticating(true);
      setError(null);

      if (isRegistration) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      handleCloseModal();
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <>
      <h2 className="sign-up-text">{isRegistration ? "Sign up" : "Login"}</h2>
      <p>
        {isRegistration ? "Create an account!" : "Sign in to your account!"}
      </p>
      {error && <div>❌ {error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />
      <button onClick={handleAuth}>
        {isAuthenticating ? "Loading..." : "Submit"}
      </button>
      <hr />

      <div className="register-content">
        <p>
          {isRegistration
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <button onClick={() => setIsRegistration(!isRegistration)}>
          {isRegistration ? "Sign in" : "Sign up"}
        </button>
      </div>
    </>
  );
};
export default Authentication;
