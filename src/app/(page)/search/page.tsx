import dynamic from "next/dynamic";

import { Container } from "~/components/common";
import { Pagination } from "~/components/common";
import GroupComic from "~/components/common/GroupComic";
import Content from "~/components/search/Content";
import { DetailApi, InformationApi, SearchApi } from "~/services";

export async function generateMetadata({ searchParams }: any) {
    if (!searchParams.keyword) {
        return null;
    }
    const search = await SearchApi.search(searchParams.keyword);

    // random number from 0 to search.seoOnPage.og_image.length
    const random = Math.floor(Math.random() * search.seoOnPage.og_image.length);

    return {
        title: "Đọc truyện | Truyện tranh hay | Tuyển tập truyện tranh mới nhất 2024",
        description:
            "Đọc truyện tranh online, truyện tranh tiếng việt mới nhất, tuyển tập truyện tranh hay nhất và cập nhật liên tục truyện tranh mới.",
        keywords:
            "đọc truyện, truyện tranh, truyện tranh online, truyện tranh mới",
        image:
            search.APP_DOMAIN_CDN_IMAGE +
            "/uploads/" +
            search.seoOnPage.og_image[random],
    };
}
async function SearchPage({ searchParams }: { searchParams: any }) {
    if (!searchParams.keyword) {
        return null;
    }

    const search = await SearchApi.search(searchParams);

    return (
        <main className='py-4'>
            <Container>
                <h2 className='text-center font-medium text-lg py-2'>
                    {search.titlePage}
                </h2>
                <GroupComic
                    comics={search.items}
                    domainImage={search.APP_DOMAIN_CDN_IMAGE}
                />
                <Pagination
                    total={search.params.pagination.totalItems}
                    pageSize={search.params.pagination.totalItemsPerPage}
                />
            </Container>
        </main>
    );
}

export default SearchPage;
