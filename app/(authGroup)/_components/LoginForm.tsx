'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useActionState, useEffect } from "react"
import { loginAction } from "../_actions/authAction"
import { toast } from "sonner"

const initialState = {
    success: false,
    message: ""
}

export const LoginForm = () => {

    const [state, action, pending] = useActionState(loginAction, initialState) // When the action will be triggered anywhere in the component, the loginAction function will start to execute. Here state will contain the result returned by the loginAction function. The pending will be true if the loginAction function is executing. Any function given in the useActionState will get previous state in the first argument and the formData in teh second argument. The formData will contain the data of the form which is submitted. The formData will be automatically passed to the function given in the useActionState when the form is submitted.

    useEffect(() => {
        if (!state.message) return

        if (state.success) {
            toast.success(state.message)
        } else {
            toast.error(state.message)
        }

    }, [state])
    return (
        <div>
            <div className="flex min-h-screen items-center justify-center">
                <Card className="w-full text-white bg-black max-w-sm">
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                        <CardAction>
                            <Button variant="link">Sign Up</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <form action={action}>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name='email'
                                        placeholder="m@example.com"
                                        required
                                        className="bg-gray-600 p-2 rounded-2xl"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" name="password" required className="bg-gray-600 p-2 rounded-2xl" />
                                </div>
                            </div>
                            <CardFooter className="flex-col gap-2 my-2">
                                <Button type="submit" disabled={pending} variant="outline" className="w-full hover:cursor-pointer hover:bg-white hover:text-black active:bg-amber-950">
                                    {pending ? "Submitting..." : "Login"}
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}