import dynamic from "next/dynamic";
import { Container } from "~/components/common";

const ListChapter = dynamic(
    () => import("~/components/information/ListChapter"),
    {
        ssr: false,
    }
);
const Left = dynamic(() => import("~/components/information/Left"));
const Right = dynamic(() => import("~/components/information/Right"));

import { ComicData } from "~/types";

interface InformationContentProps {
    comic: ComicData;
}

function InformationContent({ comic }: InformationContentProps) {
    return (
        <Container>
            <section className='flex flex-col md:flex-row gap-4'>
                <Left comic={comic} />
                <div className='flex-1'>
                    <Right comic={comic} />
                </div>
            </section>
            <section>
                <ListChapter comic={comic} />
            </section>
        </Container>
    );
}

export default InformationContent;
