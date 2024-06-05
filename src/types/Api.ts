import { BreadCrumbData, Maybe, Meta, ParamsData, SeoData } from ".";

export interface SingleResponse<T> {
    message: string;
    status: string;
    data: DataSingle<T>;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface PageResponse<T> {
    message?: string;
    meta: Maybe<Meta>;
    data: DataExtend<T>;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface DataBasic<T> {
    items: Array<T>;
}

export interface DataSingle<T> {
    seoOnPage: SeoData;
    breadCrumb: Array<BreadCrumbData>;
    titlePage: string;
    item: T;
    params: ParamsData;
    type_list: string;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface DataExtend<T> {
    seoOnPage: SeoData;
    breadCrumb: Array<BreadCrumbData>;
    titlePage: string;
    items: Array<T>;
    params: ParamsData;
    type_list: string;
    APP_DOMAIN_CDN_IMAGE: string;
}

export interface ErrorResponse {
    message: string;
    statusCode: number;
}

export interface BasicResponse<T> {
    message: string;
    status: string;
    data: DataSingle<T> & { domain_cdn: string };
}
