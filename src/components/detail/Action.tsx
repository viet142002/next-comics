"use client";

import {
    ChevronLeftIcon,
    ChevronRightIcon,
    HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { createLinkDetail } from "~/helpers/utils";
import { ComicData } from "~/types";

interface ActionProps {
    comic: ComicData;
    chapterName: string;
}

function Action({ comic, chapterName }: ActionProps) {
    const { replace } = useRouter();
    const chapters = comic.chapters[0].server_data;
    const currentChapterIndex = chapters.findIndex(
        chapter => chapter.chapter_name == chapterName
    );

    const handlePrevious = () => {
        replace(createLinkDetail(comic, chapters[currentChapterIndex - 1]));
    };

    const handleNext = () => {
        replace(createLinkDetail(comic, chapters[currentChapterIndex + 1]));
    };

    const lengthChapter = chapters.length - 1;
    const firstChapter: boolean =
        chapters[0].chapter_name == chapters[currentChapterIndex].chapter_name;
    const latestChapter: boolean =
        chapters[lengthChapter].chapter_name ==
        chapters[currentChapterIndex].chapter_name;
    return (
        <div className='flex justify-center gap-4 py-4'>
            <Button
                variant='secondary'
                onClick={handlePrevious}
                disabled={firstChapter}
            >
                <ChevronLeftIcon className='size-10' />
            </Button>
            <Button variant='secondary'>
                <HamburgerMenuIcon className='size-10' />
            </Button>
            <Button
                variant='secondary'
                onClick={handleNext}
                disabled={latestChapter}
            >
                <ChevronRightIcon className='size-10' />
            </Button>
        </div>
    );
}

export default Action;
