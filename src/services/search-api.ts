import { API } from "~/constant";
import { ComicData, DataExtend, PageResponse } from "~/types";

export const SearchApi = {
    search: async (
        params: Record<string, any>
    ): Promise<DataExtend<ComicData>> => {
        try {
            const response = await API.get<PageResponse<ComicData>>(
                `/tim-kiem`,
                params
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
