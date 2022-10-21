import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { Context } from "../context";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter();
  // c059e65a-f33d-4c6b-8e70-4ce5294a71a3

  const onLogin = (e) => {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        {
          username,
          secret,
        },
        {
          headers: { "Private-key": "" },
        }
      )
      .then((r) => router.push("/chats"));
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onLogin(e)}>
          <div className="auth-title">Project</div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit">
            Sign up / Login
          </button>
        </form>
      </div>
    </div>
  );
}
