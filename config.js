// Paste your deployed Google Apps Script Web App URL below (ends with /exec)
const CONFIG = {
  SCRIPT_URL: "PASTE_YOUR_WEB_APP_URL_HERE"
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
