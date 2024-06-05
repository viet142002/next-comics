import { ImageCustom } from "~/components/common";
import { ComicData } from "~/types";

interface IProps {
    comic: ComicData;
}

function Left({ comic }: IProps) {
    return (
        <div>
            <ImageCustom
                className='aspect-[3/4]'
                src={comic.thumb_url}
                alt={comic.name}
                width={500}
                height={700}
            />
        </div>
    );
}

export default Left;
