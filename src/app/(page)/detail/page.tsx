import dynamic from "next/dynamic";

import { Container } from "~/components/common";
import { DetailApi, InformationApi } from "~/services";
const Content = dynamic(() => import("~/components/detail/Content"));
const Action = dynamic(() => import("~/components/detail/Action"));

export async function generateMetadata({ searchParams }: any) {
    if (!searchParams.api || !searchParams.slug) {
        return null;
    }
    const chapter = await DetailApi.getData(searchParams.api);
    const comic = await InformationApi.getData(searchParams.slug);

    return {
        title: comic.seoOnPage.titleHead + chapter.item.chapter_name,
        description: comic.seoOnPage.descriptionHead,
        image:
            comic.APP_DOMAIN_CDN_IMAGE +
            "/uploads/" +
            comic.seoOnPage.og_image[0],
    };
}
async function DetailPage({ searchParams }: { searchParams: any }) {
    if (!searchParams.api || !searchParams.slug) {
        return null;
    }
    const chapter = await DetailApi.getData(searchParams.api);
    const comic = await InformationApi.getData(searchParams.slug);

    return (
        <main className='py-4'>
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
        </main>
    );
}

export default DetailPage;
