import { useState } from "react";
import "./App.css";

function App() {
  const [passw, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [length, setLength] = useState(10); // default length

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let password = "";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * chars.length);
      password += chars[random];
    }

    setPass(password);
  };

  return (
    <div className="bg-purple-200 flex justify-center h-screen items-center rounded-2xl">
      <div className="bg-violet-400 rounded-2xl px-6 py-6 flex flex-col items-center shadow-xl">

        <h1 className="font-light text-4xl text-white mb-4">
          Password Generator
        </h1>

        {/* Password Input */}
        <input
          className="bg-blue-300 mt-2 outline-0 px-3 py-2 rounded-md w-64 text-center"
          type={show ? "text" : "password"}
          value={passw}
          readOnly
        />

        {/* Length Selector */}
        <div className="mt-4 flex flex-col items-center">
          <label className="text-white text-lg mb-1">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-64"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={generatePassword}
          className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:scale-105 transition"
        >
          Generate Password
        </button>

        <button
          onClick={() => setShow(!show)}
          className="mt-3 bg-pink-300 px-3 py-2 rounded-md"
        >
          {show ? "Hide Password" : "Show Password"}
        </button>

      </div>
    </div>
  );
}

export default App;
