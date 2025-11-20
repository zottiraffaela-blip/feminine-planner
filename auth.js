import { supabaseClient } from "./supabase.js";

const form = document.getElementById("loginForm");
const errorText = document.getElementById("loginError");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

  if (error) {
    errorText.textContent = error.message;
    return;
  }

  window.location.href = "dashboard.html";
});