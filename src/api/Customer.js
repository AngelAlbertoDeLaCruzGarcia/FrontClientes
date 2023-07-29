import { API_URL } from "../utils/Contants";
import axios from "axios";

export async function GetCustomerApi(signal) {
    try {
        const url = `${API_URL}/customers`;
        const params = { signal };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function AddCustomerApi(user) {
    try {
        const url = `${API_URL}/customers`;
        const params = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function deleteCustomerApi(id) {
	try {
		const url = `${API_URL}/customers/`+id;
		const params = {
		    method: "DELETE",
		    headers:{
		        "Content-Type": "application/json",
		    },
		};
		const response = await fetch(url, params);
		const result = await response.json();
		return result;

	} catch (error) {
		console.log(error);
		return null;
    }
}