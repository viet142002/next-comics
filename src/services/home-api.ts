import { DataExtend } from "./../types/Api";
import { API } from "~/constant";
import { ComicData, PageResponse } from "~/types";

export const HomeApi = {
    getData: async (): Promise<DataExtend<ComicData>> => {
        try {
            const response = await API.get<PageResponse<ComicData>>("/home");
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
