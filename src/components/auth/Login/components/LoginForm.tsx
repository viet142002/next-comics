"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useTransition } from "react";
import { API } from "~/constant";
import { handleError } from "~/helpers/utils";
import { ROUTES } from "~/constant";

const formSchema = z.object({
    email: z
        .string({ message: "Email không được để trống" })
        .email({ message: "Email không hợp lệ" }),
    password: z.string().min(8).max(50),
});

const initialValues = {
    email: "",
    password: "",
};

export function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startTransition(async () => {
            try {
                const response = await API.localServer().post(
                    "/auth/login",
                    values
                );
            } catch (error) {
                handleError({ error });
            }
        });
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='abc@gmail.com' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Mật khẩu của bạn'
                                    {...field}
                                    type='password'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p>
                    Chưa có tài khoản?{" "}
                    <Link href={ROUTES.REGISTER}>Đăng ký ngay</Link>
                </p>

                <Button aria-disabled={isPending} type='submit'>
                    {isPending ? "Đang xử lý..." : "Đăng ký"}
                </Button>
            </form>
        </Form>
    );
}
