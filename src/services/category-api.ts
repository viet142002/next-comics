import { API } from "~/constant";
import { BasicResponse, CategoryData, DataBasic } from "~/types";

export const CategoryApi = {
    getAll: async (): Promise<DataBasic<CategoryData>> => {
        try {
            const response = await API.get<BasicResponse<CategoryData>>(
                "/categories"
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getBySlug: async (slug: string): Promise<DataBasic<CategoryData>> => {
        try {
            const response = await API.get<BasicResponse<CategoryData>>(
                `/categories/${slug}`
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};
