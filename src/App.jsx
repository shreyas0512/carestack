import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { signInWithEmailAndPassword } from "firebase/auth";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Setup from "./components/Setup";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { ProfileContext } from "./Contexts/ProfileContext";

function App() {
  const [requ, setRequ] = useState([]);
  const [selfid, setSelfid] = useState("");
  const [mutualusers, setMutualusers] = useState([]);
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const contextValue = {
    requ,
    setRequ,
    selfid,
    setSelfid,
    mutualusers,
    setMutualusers,
    name,
    setName,
    interests,
    setInterests,
    suggestions,
    setSuggestions,
  };
  return (
    <>
      <ProfileContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/profile/:abc" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </ProfileContext.Provider>
    </>
  );
}

export default App;
