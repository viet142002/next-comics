import { ButtonScrollOnTop, ImageCustom } from "~/components/common";
import { ComicDetailData } from "~/types";

interface ContentProps {
    chapter: ComicDetailData;
    domain_cdn: string;
}

function Content({ chapter, domain_cdn }: ContentProps) {
    return (
        <section className='scroll-smooth'>
            {chapter.chapter_image.map((image, index) => (
                <ImageCustom
                    domain_cdn={domain_cdn}
                    chapter_path={chapter.chapter_path}
                    key={index}
                    width={800}
                    height={1200}
                    src={image.image_file}
                    alt={image.image_page}
                />
            ))}
            <ButtonScrollOnTop />
        </section>
    );
}

export default Content;
