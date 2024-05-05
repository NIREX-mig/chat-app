"use server";

import { cookies } from "next/headers";

export const checkAuthentication = async () => {
    const cookieStore = cookies()
    let token = cookieStore.get("refershToken");
    if (!token) {
        try {
            let refershToken = localStorage.getItem("refershToken");
            const res = await instance.post("/api/v1/auth/refershtoken", { refershToken });
            console.log(res.data.data)
            if (res.data.success) {
                localStorage.setItem("refershToken", res.data.data);
            }
            return res.data.success;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}
