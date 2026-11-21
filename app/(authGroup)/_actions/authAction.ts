'use server'

import { cookies } from "next/headers"

type LoginState = {
    success: boolean,
    message: string
}

// any function that is called in the useActionState will have the previous state in the first argument and the form data in the second argument. The form data will contain the data of the form which is submitted. The form data will be automatically passed to the function given in the useActionState when the form is submitted.
export const loginAction = async (prevState: LoginState, formData: FormData) => {
    try {
        const email = formData.get('email')
        const password = formData.get('password')
        const payload = {
            email,
            password
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
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

            const userRole = result.data.user.role

            // setting the user role in the cookie
            if (userRole) {
                cookieStore.set('userRole', userRole, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24,
                    sameSite: "lax",
                    path: '/'
                })
            }

            return {
                success: true,
                message: result.message || "Login successful"
            }


        }

        return {
            success: false,
            message: result.message || "Invalid email or password broooo"
        }
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

export const getCurrentUser = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    const refreshToken = cookieStore.get('refreshToken')?.value

    if (!accessToken || !refreshToken) {
        return null
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })

    const result = await res.json()

    return result.data
}