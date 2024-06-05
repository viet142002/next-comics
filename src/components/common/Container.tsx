import { cn } from "~/lib/utils";

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn("mx-auto max-w-[95%] lg:max-w-[800px]", className)}>
            {children}
        </div>
    );
}
