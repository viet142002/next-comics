import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";

import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/toaster";
import StoreProvider from "~/redux/StoreProvider";
import { getCookie } from "~/helpers/server";
import Header from "~/components/layouts/headers";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const APP_NAME = "Truyện Tranh";
const APP_DEFAULT_TITLE = "Truyện Tranh";
const APP_TITLE_TEMPLATE = "%s - Truyện Tranh";
const APP_DESCRIPTION =
    "Truyện tranh hay nhất, mới nhất, đọc truyện tranh online, truyện tranh full, truyện tranh tiếng việt, update liên tục";

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: "summary",
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = getCookie("token");

    return (
        <html lang='vi' suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-svh bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <NextTopLoader />
                <StoreProvider
                    initialState={{
                        auth: {
                            token: token,
                            data: null,
                        },
                    }}
                >
                    <Header />
                    {children}
                </StoreProvider>
                <Toaster />
            </body>
        </html>
    );
}
