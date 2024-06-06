import InformationContent from "~/components/information";
import { generateMeta } from "~/helpers/server";
import { InformationApi } from "~/services";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: any;
}) {
    const comic = await InformationApi.getData(searchParams.slug);

    return generateMeta(comic.seoOnPage, {
        APP_DOMAIN_CDN_IMAGE: comic.APP_DOMAIN_CDN_IMAGE,
        extendKeyword: comic.item.name,
    });
}

async function Information({ searchParams }: { searchParams: any }) {
    const comic = await InformationApi.getData(searchParams.slug);
    return (
        <main className='py-4'>
            <InformationContent comic={comic.item} />
        </main>
    );
}

export default Information;
