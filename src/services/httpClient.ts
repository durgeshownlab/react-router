import axios from "axios";


const httpClient = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
});


httpClient.interceptors.request.use((config)=>{
  const token = localStorage.getItem("authToken")

  config.headers['x-api-key'] = "reqres-free-v1"

  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default httpClient