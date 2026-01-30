import { useState } from "react";

function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || {};

    if (isLogin) {
      if (users[email] !== password) {
        alert("Invalid credentials");
        return;
      }
    } else {
      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));
    }

    const user = { email };
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div className="auth">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
        {isLogin ? "Create new account" : "Already have an account?"}
      </p>
    </div>
  );
}

export default Auth;
