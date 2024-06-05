"use client";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ReactNode } from "react";

function PerfectScroll({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <PerfectScrollbar className={className}>{children}</PerfectScrollbar>
    );
}

export default PerfectScroll;
