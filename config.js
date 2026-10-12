// Paste your deployed Google Apps Script Web App URL below (ends with /exec)
const CONFIG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyjKtTLoyfpWgxVxLnbA9E4nygr_w0BaXkJR8FA1S4t4r3y8MXslE5dABcHuqIY-xt9/exec"
};

function scriptReady() {
  return CONFIG.SCRIPT_URL && CONFIG.SCRIPT_URL.indexOf("PASTE_") === -1;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Every call goes out as a POST (sent as plain text so no CORS preflight is needed).
// A failed attempt is retried up to 3 times before giving up.
async function apiPost(body) {
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(CONFIG.SCRIPT_URL, { method: "POST", body: JSON.stringify(body) });
      return await res.json();
    } catch (e) {
      lastError = e;
      await sleep(700 * (attempt + 1));
    }
  }
  throw lastError;
}

// Lookups (config, search, session) use the same POST route.
function apiGet(params) {
  return apiPost(params);
}
