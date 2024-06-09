"use client";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "~/components/ui/drawer";
import { setValue } from "~/redux/features";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import ListChapter from "~/components/information/ListChapter";
import { ComicData } from "~/types";

interface IProps {
    comic: ComicData;
    current?: string;
}

function ListChapterInDetail({ comic, current }: IProps) {
    const { showListChapterInDetail } = useAppSelector(
        state => state.common.value
    );
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(setValue({ showListChapterInDetail: false }));
    };

    return (
        <div>
            <Drawer onClose={handleClose} open={showListChapterInDetail}>
                <DrawerContent>
                    <div className='mx-auto w-full max-w-sm'>
                        <DrawerHeader>
                            <DrawerTitle>Chọn Chapter</DrawerTitle>
                            <DrawerDescription>
                                Chọn chapter bạn muốn đọc
                            </DrawerDescription>
                        </DrawerHeader>
                        <div className='p-4 pb-0 will-change-auto'>
                            <ListChapter
                                comic={comic}
                                current={current}
                                handleClose={handleClose}
                            />
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default ListChapterInDetail;
