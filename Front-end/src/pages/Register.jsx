import { useNavigate } from "react-router";
import { useState } from "react";
import { UseAuth } from "../context/Auth/AuthCntext";

export default function Register() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("ss@ss.cc");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = UseAuth();


  const handleRegister = async () => {
    if (!FirstName || !LastName || !email || !password) {
      setError("missing information!");
      return;
    }

    const url = `http://localhost:5000/user/register`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: FirstName,
        lastName: LastName,
        email: email,
        password: password,
      }),
    });

    if (!res.ok) {
      setError("somthing went wrong!");
    }
    const token = await res.json();

    if (!token) {
      setError("incorect Token!");
    }

    login(token, email);
    console.log(token);
  };

    if(error){
    console.log(error)
  }
  return (
    <>
      <div className="bg-white flex items-center justify-center h-[calc(100vh-63px)]">
        <div className="w-full max-w-md px-6 py-12 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="mt-1 text-sm text-gray-600">
              Sign Up to continue your StyleHub journey.
            </p>
          </div>

          <form className="space-y-5">
            <div className="flex items-center gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jhone "
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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
                placeholder="*********"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 mt-4 rounded-md hover:bg-gray-900 transition cursor-pointer"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Already have an account? {""}
            <a
              onClick={() => navigate("/login")}
              href="#"
              className="font-medium text-black hover:underline"
            >
              Sign in
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
