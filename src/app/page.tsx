import dynamic from "next/dynamic";
import { Container } from "~/components/common";
import { SEO } from "~/constant/common";
import { generateMeta } from "~/helpers/server";

const GroupComic = dynamic(() => import("~/components/common/GroupComic"));
import { HomeApi } from "~/services";

export async function generateMetadata() {
    const latest = await HomeApi.getData();

    return generateMeta(latest.seoOnPage, {
        APP_DOMAIN_CDN_IMAGE: latest.APP_DOMAIN_CDN_IMAGE,
        titleHead: SEO.TITLE,
    });
}

export default async function Home() {
    const latest = await HomeApi.getData();
    return (
        <main>
            <Container>
                <h1>{latest.titlePage}</h1>
                <GroupComic
                    title='Truyện mới cập nhật'
                    comics={latest.items}
                    domainImage={latest.APP_DOMAIN_CDN_IMAGE}
                />
            </Container>
        </main>
    );
}
