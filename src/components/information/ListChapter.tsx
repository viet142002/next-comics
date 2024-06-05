"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
const PerfectScroll = dynamic(
    () => import("~/components/common/PerfectScroll")
);
import { ComicData } from "~/types";
import { useAppStore } from "~/redux/hooks";
import { setListComic, setCurrentComic } from "~/redux/features";
import { useEffect } from "react";
import { createLinkDetail } from "~/helpers/utils";

interface IProps {
    comic: ComicData;
}

function ListChapter({ comic }: IProps) {
    const { dispatch } = useAppStore();

    const handleClick = (chapter_name: string) => {
        dispatch(setCurrentComic(chapter_name));
    };

    useEffect(() => {
        dispatch(setListComic(comic.chapters[0].server_data));
    }, [comic, dispatch]);
    return (
        <>
            <PerfectScroll className='max-h-[500px] overflow-y-scroll overflow-x-visible'>
                <ul className=''>
                    {comic.chapters[0].server_data.map((chapter, index) => (
                        <li key={index}>
                            <Link
                                onClick={() =>
                                    handleClick(chapter.chapter_name)
                                }
                                href={createLinkDetail(comic, chapter)}
                                className='p-2 block hover:bg-gray-100 duration-300'
                            >
                                Chapter {chapter.chapter_name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </PerfectScroll>
        </>
    );
}

export default ListChapter;
