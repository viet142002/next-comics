import { toast } from "~/components/ui/use-toast";
import { ChapterItemData, ComicData, ComicDetailData } from "~/types";

export const handleError = ({
    error,
    duration,
}: {
    error: any;
    duration?: number;
}) => {
    toast({
        title: "Lỗi",
        description:
            error?.payload?.message ?? error?.message ?? "Lỗi không xác định",
        variant: "destructive",
        duration: duration ?? 5000,
    });
};

export const createLinkDetail = (
    comic: ComicData,
    chapter: ChapterItemData
) => {
    return `/truyen-tranh/${comic.slug}/${chapter.chapter_name}?api=${chapter.chapter_api_data}`;
};
