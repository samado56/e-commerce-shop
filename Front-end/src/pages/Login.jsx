import { useNavigate } from "react-router";
import { useState } from "react";
import { UseAuth } from "../context/Auth/AuthCntext";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("ss@ss.cc");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = UseAuth();



  const handleLogin = async () => {
    if (!email || !password) {
      setError("missing information!");
      return;
    }

    const url = `http://localhost:5000/user/login`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if(res.ok){
      console.log('login success')
    }

    if (!res.ok) {
      setError("somthing went wrong!");
      return;
    }
    const token = await res.json();

    if (!token) {
      setError("incorect Token!");
    }

    console.log(token);
    login(email, token);
    navigate("/shopping");
  };

  if(error){
    console.log(error )
  }

  return (
    <>
      <div className="bg-white flex items-center justify-center h-[calc(100vh-63px)]">
        <div className="w-full max-w-md px-6 py-12 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="mt-1 text-sm text-gray-600">
              Sign in to continue your StyleHub journey.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-black hover:underline"
              >
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              onClick={() => navigate("/register")}
              href="#"
              className="font-medium text-black hover:underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 text-lg text-gray-400 border-t-2 border-gray-400/20">
        © 2024 StyleHub. All rights reserved.
      </footer>
    </>
  );
}
