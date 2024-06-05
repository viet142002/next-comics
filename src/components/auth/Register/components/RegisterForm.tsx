"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
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
import Link from "next/link";
import { ROUTES } from "~/constant";

const formSchema = z
    .object({
        fullname: z
            .string({ message: "Họ tên không được để trống" })
            .min(3, { message: "Họ tên có ít nhất 3 ký tự" })
            .max(50, { message: "Họ tên có tối đa 50 ký tự" }),
        email: z
            .string({ message: "Email không được để trống" })
            .email({ message: "Email không hợp lệ" }),
        password: z.string().min(8).max(50),
        confirmPassword: z.string().min(8).max(50),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Mật khẩu không trùng khớp",
        path: ["confirmPassword"],
    });

const initialValues = {
    fullname: "",
    email: "",
    password: "",
    rePassword: "",
};

export function RegisterForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startTransition(() => {
            API.localServer().post("/auth/login", values);
        });
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name='fullname'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Họ và tên</FormLabel>
                            <FormControl>
                                <Input placeholder='Nguyễn Văn A' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại mật khẩu</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Nhập lại mật khẩu của bạn'
                                    {...field}
                                    type='password'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p>
                    Bạn đã có tài khoản?{" "}
                    <Link href={ROUTES.LOGIN}>Đăng nhập</Link>
                </p>
                <Button aria-disabled={isPending} type='submit'>
                    {isPending ? "Đang xử lý..." : "Đăng ký"}
                </Button>
            </form>
        </Form>
    );
}
