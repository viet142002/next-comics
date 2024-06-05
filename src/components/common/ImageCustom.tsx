"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "~/lib/utils";

import { Skeleton } from "~/components/ui/skeleton";

const imageLoader = ({ src, width }: { src: any; width: any }) => {
    if (width) {
        return src + "?w=" + width;
    }
    return src;
};

interface ImageCustomProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
    quality?: number;
    chapter_path?: string;
    domain_cdn?: string;
    fit?: "cover" | "contain";
    className?: string;
    loading?: "lazy" | "eager";
}

export function ImageCustom({
    src,
    alt,
    width,
    height,
    fit = "cover",
    className,
    loading = "lazy",
    domain_cdn,
    chapter_path,
    ...props
}: ImageCustomProps) {
    const [isLoading, setIsLoading] = useState(false);
    let newSrc = process.env.API_IMAGE + "/uploads/comics/" + src;
    if (domain_cdn) {
        newSrc = domain_cdn + "/uploads/comics/" + src;
    }
    if (domain_cdn && chapter_path) {
        newSrc = domain_cdn + "/" + chapter_path + "/" + src;
    }
    if (chapter_path && !domain_cdn) {
        newSrc = process.env.API_IMAGE + "/" + chapter_path + "/" + src;
    }

    const aspectRatioHeight = (+height / +width) * 250;

    function handleLoadingComplete() {
        setIsLoading(false);
    }
    return (
        <>
            {isLoading && (
                <Skeleton
                    className={cn(className, "w-full h-auto")}
                    style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}
                />
            )}
            <Image
                src={newSrc}
                alt={alt}
                width={250}
                height={aspectRatioHeight}
                loading={loading}
                priority={loading === "lazy" ? false : true}
                style={{
                    objectFit: fit,
                    display: isLoading ? "none" : "block",
                    width: "100%",
                    height: "auto",
                }}
                className={`${className}`}
                loader={imageLoader}
                onLoad={(e: any) => {
                    handleLoadingComplete();
                }}
                {...props}
            />
        </>
    );
}
