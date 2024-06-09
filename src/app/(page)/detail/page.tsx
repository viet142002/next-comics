import dynamic from "next/dynamic";

import { Container } from "~/components/common";
import { generateMeta } from "~/helpers/server";
import { DetailApi, InformationApi } from "~/services";
import Content from "~/components/detail/Content";
const ListChapterInDetail = dynamic(
    () => import("~/components/detail/ListChapterInDetail")
);
const Action = dynamic(() => import("~/components/detail/Action"));
import { Suspense } from "react";

export async function generateMetadata({ searchParams }: any) {
    if (!searchParams.api || !searchParams.slug) {
        return null;
    }
    const chapter = await DetailApi.getData(searchParams.api);
    const comic = await InformationApi.getData(searchParams.slug);

    return generateMeta(comic.seoOnPage, {
        titleHead: comic.seoOnPage.titleHead + chapter.item.chapter_name,
        APP_DOMAIN_CDN_IMAGE: comic.APP_DOMAIN_CDN_IMAGE,
    });
}
async function DetailPage({ searchParams }: { searchParams: any }) {
    if (!searchParams.api || !searchParams.slug) {
        return null;
    }
    const fetchChapter = DetailApi.getData(searchParams.api);
    const fetchComic = InformationApi.getData(searchParams.slug);

    const [chapter, comic] = await Promise.all([fetchChapter, fetchComic]);

    return (
        <main>
            <Container className='max-w-full'>
                <Action
                    comic={comic.item}
                    chapterName={chapter.item.chapter_name}
                />
                <Content
                    chapter={chapter.item}
                    domain_cdn={chapter.domain_cdn}
                />
                <Action
                    comic={comic.item}
                    chapterName={chapter.item.chapter_name}
                />
            </Container>
            <ListChapterInDetail
                comic={comic.item}
                current={searchParams.chapter}
            />
        </main>
    );
}

export default DetailPage;
