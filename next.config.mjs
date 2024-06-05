/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    disable: false,
    cacheOnFrontendNav: true,
    reloadOnOnline: true,
    aggressiveFrontEndNavCaching: true,
    workboxOptions: {
        disableDevLogs: true,
    },
});

export default withPWA({
    env: {
        API_URL: process.env.API_URL,
        API_IMAGE: process.env.API_IMAGE,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },

    rewrites: async () => {
        return [
            {
                source: "/truyen-tranh/:slug",
                destination: `/information`,
            },
            {
                source: "/truyen-tranh/:slug/:chapter",
                destination: `/detail`,
            },
            {
                source: "/tim-kiem",
                destination: `/search`,
            },
        ];
    },
});
