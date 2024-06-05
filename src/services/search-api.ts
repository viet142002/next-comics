import { API } from "~/constant";
import { ComicData, DataExtend, PageResponse } from "~/types";

export const SearchApi = {
    search: async (): Promise<DataExtend<ComicData>> => {
        try {
            const response = await API.get<PageResponse<ComicData>>("/search");
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
