"use client";

import { FormEvent, useRef, useState } from "react";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

function SearchButton() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!search) return;
        setSearch("");
        setOpen(false);
        router.push(`/tim-kiem?keyword=${search}`);
    };

    const handleClick = () => {
        setOpen(!open);
        if (!open) {
            inputRef.current?.focus();
        }
    };

    return (
        <div className='relative'>
            <button onClick={handleClick}>
                {open ? (
                    <Cross2Icon className='size-6' />
                ) : (
                    <MagnifyingGlassIcon className='size-6' />
                )}
            </button>
            <form
                onSubmit={handleSubmit}
                className='transition-all duration-500 ease-in-out absolute top-10 right-0 bg-slate-600  z-50 flex gap-2 rounded-lg text-white w-[calc(100vw*0.95)] md:w-80'
                style={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? "auto" : "none",
                    transform: open ? "translateY(0)" : "translateY(100%)",
                }}
            >
                <input
                    ref={inputRef}
                    name='search'
                    value={search}
                    type='text'
                    onChange={e => setSearch(e.target.value)}
                    className='py-2 px-4 bg-transparent focus:outline-none flex-1'
                />
                <button className='p-2' type='submit'>
                    <MagnifyingGlassIcon className='size-6' />
                </button>
            </form>
        </div>
    );
}

export default SearchButton;
