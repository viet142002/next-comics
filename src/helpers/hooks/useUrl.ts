"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useUrl = () => {
    const pathname = usePathname();
    const params = useSearchParams();
    const { replace } = useRouter();

    const setUrl = (params: Record<string, string>) => {
        const url = new URL(pathname);
        for (const key in params) {
            url.searchParams.set(key, params[key]);
        }
        replace(url.toString());
    };

    return { pathname, params, setUrl };
};
