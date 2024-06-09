import dynamic from "next/dynamic";
import { Container } from "~/components/common";

const Actions = dynamic(() => import("~/components/information/Actions"));
const InfoInMobile = dynamic(
    () => import("~/components/information/InfoInMobile")
);
const ListChapter = dynamic(
    () => import("~/components/information/ListChapter")
);
const Left = dynamic(() => import("~/components/information/Left"));
const Right = dynamic(() => import("~/components/information/Right"));

import { ComicData } from "~/types";

interface InformationContentProps {
    comic: ComicData;
}

function InformationContent({ comic }: InformationContentProps) {
    return (
        <>
            <Container className='flex-col md:flex-row gap-4 hidden md:flex'>
                <Left comic={comic} />
                <div className='flex-1'>
                    <Right comic={comic} />
                </div>
            </Container>
            <div className='md:hidden h-[40vh] overflow-hidden'>
                <Left comic={comic} />
            </div>
            <section className='py-3 space-y-3 hidden md:block'>
                <Actions comic={comic} />
                <ListChapter comic={comic} />
            </section>

            <InfoInMobile comic={comic} />
        </>
    );
}

export default InformationContent;
