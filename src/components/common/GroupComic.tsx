import CardComic from "~/components/card/CardComic";
import { ComicData } from "~/types";

interface GroupComicProps {
    title?: string;
    comics: Array<ComicData>;
    domainImage: string;
}
function GroupComic({ title, comics, domainImage }: GroupComicProps) {
    return (
        <section>
            {title && <h2 className='line-clamp-2'>{title}</h2>}
            <ul className='grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4'>
                {comics.map(comic => (
                    <li key={comic._id}>
                        <CardComic comic={comic} domain_cdn={domainImage} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GroupComic;
