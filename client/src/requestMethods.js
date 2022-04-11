import axios from "axios";

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjg3MDQyNWJjZThkMzVmMGM2OGUwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjkwNjE3NSwiZXhwIjoxNjQ3MTY1Mzc1fQ.4FMLXZwjvZ_sqpgiedl5W4IUq8_p5Q-NEHlRFpPANRI";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
});
