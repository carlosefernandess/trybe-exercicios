import fetch from "node-fetch";
global.fetch = fetch;
fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json())
  .then(data => console.log(data));