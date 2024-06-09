import { Container } from "~/components/common";
import { Button } from "~/components/ui/button";
import { ComicData } from "~/types";

interface IProps {
    comic: ComicData;
}

function Actions({ comic }: IProps) {
    const chapters = comic.chapters[0].server_data;
    const latestChapter = chapters[chapters.length - 1];
    const firstChapter = chapters[0];

    const handleClick = (index: string) => {
        console.log(index);
    };

    return (
        <Container className='flex justify-around gap-4'>
            <Button className='flex flex-col flex-1 h-fit' variant='secondary'>
                <span>Chương đầu</span>
                <span className='text-lg font-medium'>
                    Chapter {chapters[chapters.length - 1].chapter_name}
                </span>
            </Button>
            <Button className='flex flex-col flex-1 h-fit' variant='secondary'>
                <span>Chương mới nhất</span>
                <span className='text-lg font-medium'>
                    Chapter {chapters[0].chapter_name}
                </span>
            </Button>
        </Container>
    );
}

export default Actions;
