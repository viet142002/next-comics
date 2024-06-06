import { cookies } from "next/headers";

export const getCookie = (key: string) => {
    const cookieStore = cookies();
    const cookie = cookieStore.get(key);
    return cookie?.value || null;
};

export const removeCookie = (key: string) => {
    const cookieStore = cookies();
    cookieStore.delete(key);
};
