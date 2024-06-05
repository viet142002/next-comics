import { API_DETAIL } from "~/constant";
import { BasicResponse, ComicDetailData, DataSingle } from "~/types";

export const DetailApi = {
    getData: async (
        url: string
    ): Promise<DataSingle<ComicDetailData> & { domain_cdn: string }> => {
        try {
            const response = await API_DETAIL.setUrl(url).get<
                BasicResponse<ComicDetailData>
            >();
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
