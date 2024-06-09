import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";

const Right = dynamic(() => import("~/components/information/Right"));
const ListChapter = dynamic(
    () => import("~/components/information/ListChapter")
);
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { createLatestChapter, createOlderChapter } from "~/helpers/utils";
import { ComicData } from "~/types";

interface IProps {
    comic: ComicData;
}

function InfoInMobile({ comic }: IProps) {
    return (
        <section className='md:hidden p-2'>
            <Tabs defaultValue='info'>
                <div className='w-fit mx-auto py-2'>
                    <TabsList>
                        <TabsTrigger value='info' className='text-lg'>
                            Thông tin
                        </TabsTrigger>
                        <TabsTrigger value='chapters' className='text-lg'>
                            Chương
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value='info'>
                    <Right comic={comic} />
                </TabsContent>
                <TabsContent value='chapters'>
                    <ListChapter comic={comic} />
                </TabsContent>
            </Tabs>
            <FloatButton comic={comic} />
        </section>
    );
}

export default InfoInMobile;

const FloatButton = ({ comic }: IProps) => {
    return (
        <div className='fixed bottom-2 left-1/2 -translate-x-1/2'>
            <div className='bg-primary/80 text-white font-medium text-2xl rounded-full flex'>
                <button className='p-2 px-4'>Đọc ngay</button>
                <More comic={comic} />
            </div>
        </div>
    );
};

const More = ({ comic }: { comic: ComicData }) => {
    return (
        <Popover>
            <PopoverTrigger className='flex justify-center items-center px-2'>
                <ChevronUpIcon className='size-8' />
            </PopoverTrigger>
            <PopoverContent className='w-40 p-0'>
                <Link href={createLatestChapter(comic)} className='block p-2'>
                    Mới nhất
                </Link>
                <Link href={createOlderChapter(comic)} className='block p-2'>
                    Chapter đầu
                </Link>
            </PopoverContent>
        </Popover>
    );
};
