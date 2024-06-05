export function HtmlContent({
    content,
    className,
}: {
    content: string;
    className?: string;
}) {
    return (
        <div
            className={`prose ${className}`}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
