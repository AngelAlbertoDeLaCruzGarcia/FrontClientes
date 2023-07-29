import { API_URL } from "../utils/Contants";
import axios from "axios";

export async function AddUserApi(user) {
	const url = `${API_URL}/user/create`;
	const params = {
		headers: { "Content-Type": "application/json" },
	};
	const response = await axios.post(url, user, params);
	return response;
}
