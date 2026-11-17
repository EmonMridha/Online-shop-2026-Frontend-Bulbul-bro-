import { cookies } from "next/headers"

type LoginState = {
    success: boolean,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string,
        userRole?: string  // ← Add optional userRole
    }
}

export const loginAction = async (prevState: LoginState, formData: FormData) => {
    try {
        const email = formData.get('email')
        const password = formData.get('password')
        const payload = {
            email,
            password
        }

        const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)// converting the payload into json
        })

        const result = await res.json();

        if (result.success) {
            const cookieStore = await cookies()

            // setting the access token in the cookie in browser with httpOnly flag and maxAge of 1 day
            cookieStore.set('accessToken', result.data.accessToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                sameSite: "lax",
                path: '/'
            })

            // setting the refresh token in the cookie in browser with httpOnly flag and maxAge of 7 days
            cookieStore.set('refreshToken', result.data.refreshToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, // 7 days
                sameSite: "lax",
                path: '/'
            })

            const token = result.data.accessToken;
            const userRole = result.data.user.role

            // setting the user role in the cookie
            if (result.data.role) {
                cookieStore.set('userRole', result.data.userRole, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24,
                    sameSite: "lax",
                    path: '/'
                })
            }

            cookieStore.set("userRole", userRole, {
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "lax",
                path: "/"
            })

            return {
                success: true,
                message: result.message || "Login successful",
                data: {
                    accessToken: result.data.accessToken,
                    refreshToken: result.data.refreshToken,
                    userRole: userRole
                }
            }
        }

        return result

    } catch (error) {
        if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
            throw error
        }
        return {
            success: false,
            message: "Login failed",
            data: {
                accessToken: "",
                refreshToken: ""
            }
        }
    }
}