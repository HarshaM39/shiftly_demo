import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const[name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[role,setRole]=useState("")


  const handleSignup = (e) => {
  e.preventDefault();

  const user = {
    name,
    email,
    password,
    role,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration successful!");

  navigate("/login");
};

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Signup
        </h1>

        <p className="mb-6 text-gray-500">
          create an account to view properties.
        </p>

        <form onSubmit={handleSignup}>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-4 w-full rounded-md border border-gray-300 px-4 py-3"
          />

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
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Role
            </label>

            <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="mb-6 w-full rounded-md border border-gray-300 px-4 py-3"
            >
            <option value="">Select your role</option>
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
            <option value="agent">Agent</option>

            </select>

          <button
            type="submit"
            className="w-full rounded-md bg-violet-600 px-4 py-3 font-medium text-white hover:bg-violet-700"
          >
            Signup
          </button>
          <p>
            already have an account? <span className="text-blue-600 cursor-pointer" onClick={()=>navigate("/login")}>Login</span>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Signup;