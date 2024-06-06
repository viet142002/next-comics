import { headers } from "next/headers";
import { SEO } from "~/constant/common";
import { SeoData } from "~/types";

interface IOption {
    APP_DOMAIN_CDN_IMAGE: string;
    descriptionHead?: string;
    og_type?: string;
    titleHead?: string;
    og_image?: Array<string>;
    og_url?: string;
    keyword?: string;
    extendKeyword?: string;
    robot?: boolean;
}
export const generateMeta = (seoData: SeoData, option: IOption) => {
    const headersList = headers();
    const url = headersList.get("x-url") || "";

    const title = option?.titleHead || seoData.titleHead || SEO.TITLE;
    const type = option?.og_type || seoData.og_type || SEO.TYPE;
    const description =
        option?.descriptionHead || seoData.descriptionHead || SEO.DESCRIPTION;
    let keywords = option?.keyword || SEO.KEYWORDS;
    if (option?.extendKeyword) {
        keywords += ", " + option.extendKeyword;
    }
    const images = seoData.og_image.map(image => {
        return option.APP_DOMAIN_CDN_IMAGE + "/uploads/" + image;
    });
    const copyright = SEO.COPYRIGHT;

    return {
        metadataBase: new URL(headersList.get("x-domain") as string),
        title,
        description,
        copyright,
        keywords,
        url,
        category: "comics",
        authors: SEO.AUTHORS,
        openGraph: {
            title,
            type,
            description,
            siteName: title,
            images,
            url,
            authors: SEO.AUTHORS,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            type,
            images,
            url,
            authors: SEO.AUTHORS,
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: option?.robot || true,
            follow: option?.robot || true,
            googleBot: {
                index: option?.robot || true,
                follow: option?.robot || true,
            },
        },
    };
};
