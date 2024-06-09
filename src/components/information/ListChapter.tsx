"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ChapterItemData, ComicData } from "~/types";
import { useAppSelector, useAppStore } from "~/redux/hooks";
import { setListComic, setCurrentComic } from "~/redux/features";
import { createLinkDetail } from "~/helpers/utils";
import { Container } from "~/components/common";
import { ScrollArea } from "~/components/ui/scroll-area";

interface IProps {
    comic: ComicData;
    current?: string;
    handleClose?: () => void;
}

function ListChapter({ comic, current, handleClose }: IProps) {
    const { dispatch } = useAppStore();
    const [search, setSearch] = useState<string>("");
    const [listChapter, setListChapter] = useState<Array<ChapterItemData>>(
        comic.chapters[0].server_data
    );

    const handleClick = (chapter_name: string) => {
        dispatch(setCurrentComic(chapter_name));
    };

    useEffect(() => {
        dispatch(setListComic(comic.chapters[0].server_data));
    }, [comic, dispatch]);

    useEffect(() => {
        if (search) {
            const filterChapter = comic.chapters[0].server_data.filter(
                chapter => chapter.chapter_name.includes(search)
            );
            setListChapter(filterChapter);
        } else {
            setListChapter(comic.chapters[0].server_data);
        }
    }, [search, comic]);

    return (
        <Container>
            <div>
                <input
                    type='text'
                    placeholder='Nhập chapter'
                    onChange={(e: any) => setSearch(e.target.value)}
                    className='w-full p-2 shadow-md rounded-md focus:outline-none'
                />
            </div>
            <ScrollArea className='h-80 p-2 shadow-md mt-2 rounded-md'>
                <ul className='mt-2 overflow-y-scroll overflow-x-visible'>
                    {listChapter.map((chapter, index) => (
                        <li key={index}>
                            <Link
                                onClick={() => {
                                    handleClick(chapter.chapter_name);
                                    handleClose && handleClose();
                                }}
                                href={createLinkDetail(comic, chapter)}
                                className={`p-2 block hover:bg-gray-100 duration-300 ${
                                    chapter.chapter_name === current
                                        ? "bg-gray-100"
                                        : ""
                                }`}
                            >
                                Chapter {chapter.chapter_name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </Container>
    );
}

export default ListChapter;
