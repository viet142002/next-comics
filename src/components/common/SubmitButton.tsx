"use client";

import { FormEvent } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "~/components/ui/button";

export function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus();

    const handleClick = (event: FormEvent) => {
        if (pending) {
            event.preventDefault();
        }
    };

    return (
        <Button aria-disabled={pending} type='submit' onClick={handleClick}>
            {title}
        </Button>
    );
}
