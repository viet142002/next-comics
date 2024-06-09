import { Container, HtmlContent } from "~/components/common";
import { ComicData } from "~/types";

interface IProps {
    comic: ComicData;
}

function Right({ comic }: IProps) {
    return (
        <section>
            <h1 className='text-2xl font-bold py-2'>{comic.name}</h1>
            <div className='flex flex-wrap gap-3'>
                <span>Thể loại:</span>
                <ul className='flex gap-2 flex-wrap'>
                    {comic.author.map((auth, index) => (
                        <li key={index}>{auth}</li>
                    ))}
                </ul>
            </div>
            <p>
                Trạng thái: <span>{comic.status}</span>
            </p>
            <div className='flex gap-x-3'>
                <span className='text-nowrap'>Thể loại:</span>
                <ul className='flex gap-x-2 flex-wrap'>
                    {comic.category.map(cate => (
                        <li key={cate.id}>{cate.name}</li>
                    ))}
                </ul>
            </div>
            <HtmlContent
                content={comic.content}
                className='p-2 bg-gray-100 rounded-lg'
            />
        </section>
    );
}

export default Right;
