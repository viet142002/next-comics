import { CategoryData } from "~/types/Category";

export interface ComicData {
    _id: string;
    name: string;
    slug: string;
    origin_name: Array<string>;
    content: string;
    status: string;
    thumb_url: string;
    sub_docquyen: boolean;
    author: Array<string>;
    category: Array<CategoryData>;
    chapters: Array<ChaptersData>;
    updatedAt: string;
    chaptersLatest: Array<ChapterItemData>;
}

export interface ComicDetailData {
    _id: string;
    comic_name: string;
    chapter_name: string;
    chapter_title: string;
    chapter_path: string;
    chapter_image: Array<{
        image_page: string;
        image_file: string;
    }>;
}

export interface ChaptersData {
    server_name: string;
    server_data: Array<ChapterItemData>;
}

export interface ChapterItemData {
    filename: string;
    chapter_name: string;
    chapter_title: string;
    chapter_api_data: string;
}
