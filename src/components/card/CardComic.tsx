import Link from "next/link";

import { ImageCustom } from "~/components/common";
import { createLinkDetail } from "~/helpers/utils";
import { ComicData } from "~/types";

interface CardComicProps {
    comic: ComicData;
    domain_cdn: string;
}

function CardComic({ comic, domain_cdn }: CardComicProps) {
    return (
        <article className='flex flex-col h-full'>
            <Link href={`/truyen-tranh/${comic.slug}`}>
                <ImageCustom
                    className='aspect-[3/4]'
                    height={200}
                    width={150}
                    src={comic.thumb_url}
                    alt={comic.name}
                    domain_cdn={domain_cdn}
                />
                <h3 className='line-clamp-2'>{comic.name}</h3>
            </Link>
            <ul className='mt-auto pt-2'>
                {comic.chaptersLatest.map(chapter => (
                    <li
                        key={chapter.chapter_name}
                        className='px-2 py-1 rounded-full text-sm bg-gray-200 inline-block'
                    >
                        <Link href={createLinkDetail(comic, chapter)}>
                            {chapter.chapter_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default CardComic;
