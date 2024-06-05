import dynamic from "next/dynamic";
import { Container } from "~/components/common";

const GroupComic = dynamic(() => import("~/components/common/GroupComic"));
import { HomeApi } from "~/services";

export default async function Home() {
    const latest = await HomeApi.getData();
    return (
        <main>
            <Container>
                <h1>{latest.titlePage}</h1>
                <GroupComic
                    title='Latest'
                    comics={latest.items}
                    domainImage={latest.APP_DOMAIN_CDN_IMAGE}
                />
            </Container>
        </main>
    );
}
