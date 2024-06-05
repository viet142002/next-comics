import { API } from "~/constant";

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password, fullname } = body;
    try {
        const res = await API.post("/auth/login", {
            fullname,
            email,
            password,
        });
        return Response.json(res);
    } catch (error: any) {
        return Response.json(error, {
            status: error.statusCode || 500,
        });
    }
}
