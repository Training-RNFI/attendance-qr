// Paste your deployed Google Apps Script Web App URL below (ends with /exec)
const CONFIG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyjKtTLoyfpWgxVxLnbA9E4nygr_w0BaXkJR8FA1S4t4r3y8MXslE5dABcHuqIY-xt9/exec"
};

function scriptReady() {
  return CONFIG.SCRIPT_URL && CONFIG.SCRIPT_URL.indexOf("PASTE_") === -1;
}

async function apiGet(params) {
  const res = await fetch(CONFIG.SCRIPT_URL + "?" + new URLSearchParams(params));
  return res.json();
}

async function apiPost(body) {
  // Sent as plain text so the browser does not need a CORS preflight
  const res = await fetch(CONFIG.SCRIPT_URL, { method: "POST", body: JSON.stringify(body) });
  return res.json();
}
