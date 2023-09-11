import axios from "axios";

const Bearer_token = process.env.REACT_APP_ADMIN_TOKEN;

export const HTTPKonseling = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${Bearer_token}`,
    },
});

export const handlerApi = async (endpoint: string) => {
    try {
        const res = await HTTPKonseling.get(endpoint);
        return res.data.data;
    } catch (error) {
        console.error(error);
    }
};