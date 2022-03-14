import axios from "axios";

const http = axios.create({
  baseURL: "https://my-json-server.typicode.com/peerbnk-tech/web-api-samples",
});

export default http;
