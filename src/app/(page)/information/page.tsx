import InformationContent from "~/components/information";
import { InformationApi } from "~/services";

async function Information({ searchParams }: { searchParams: any }) {
    const comic = await InformationApi.getData(searchParams.slug);
    return (
        <main className='py-4'>
            <InformationContent comic={comic.item} />
        </main>
    );
}

export default Information;
