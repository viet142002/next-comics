import { API } from "~/constant";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const { data } = useAppSelector(state => state.auth);

    const login = async (email: string, password: string) => {
        try {
            const res = await API.localServer().post("/auth/login", {
                email,
                password,
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return { login, data };
};
