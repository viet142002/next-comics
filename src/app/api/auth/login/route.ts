import { cookies } from "next/headers";
import { API } from "~/constant";

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;
    try {
        const res = await API.post("/auth/login", {
            email,
            password,
        });

        cookies().set("token", res.access_token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: new Date(Date.now() + 60 * 60 * 1000),
        });

        return Response.json(res);
    } catch (error: any) {
        return Response.json(error, {
            status: error.statusCode || 500,
        });
    }
}
