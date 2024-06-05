import { API } from "~/constant";
import { ComicData, DataSingle, PageResponse } from "~/types";

export const InformationApi = {
    getData: async (slug: string): Promise<DataSingle<ComicData>> => {
        try {
            const response = await API.get<PageResponse<ComicData>>(
                `/truyen-tranh/${slug}`
            );
            return response.data;
        } catch (error: any) {
            console.log("error", error);
            throw error;
        }
    },
};
