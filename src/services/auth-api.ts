import { API } from "~/constant";

export const AuthApi = {
    login: async (formData: any) => {
        return await API.post("/auth/login", formData);
    },
    register: async (formData: any) => {
        return await API.post("/auth/register", formData);
    },
};
