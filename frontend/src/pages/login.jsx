import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
// 18008333
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please signup first.");
    navigate("/signup");
    return;
  }

  if (
    email !== storedUser.email ||
    password !== storedUser.password
  ) {
    alert("Invalid email or password.");
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("role", storedUser.role);

  if (storedUser.role === "tenant") {
    navigate("/properties");
  } else if (storedUser.role === "landlord") {
    navigate("/properties/add");
  } else if (storedUser.role === "agent") {
    navigate("/agent");
  }
};

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Login
        </h1>

        <p className="mb-6 text-gray-500">
          Login to view properties.
        </p>

        <form onSubmit={handleLogin}>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-6 w-full rounded-md border border-gray-300 px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-violet-600 px-4 py-3 font-medium text-white hover:bg-violet-700"
          >
            Login
          </button>
          <p>
            Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate("/signup")}>Signup</span>
          </p>


        </form>

      </div>
    </div>
  );
}

export default Login;