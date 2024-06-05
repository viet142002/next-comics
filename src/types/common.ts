export interface Base {
    id: string;
    createdAt: string;
    updatedAt: string;
}

export type Maybe<T> = T | null;
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]-?: T[SubKey];
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};

export type Role = "ADMIN" | "USER";

export interface PaginationData {
    totalItems: number;
    totalItemsPerPage: number;
    currentPage: number;
    pageRanges: number;
}

export interface Meta {
    pagination?: PaginationData;
    include?: Maybe<Array<string>>;
}

export interface SeoData {
    descriptionHead: string;
    og_type: string;
    titleHead: string;
    og_image: Array<string>;
    og_url: string;
}

export interface BreadCrumbData {
    name: string;
    slug: string;
    isCurrent: boolean;
    position: number;
}

export interface ParamsData {
    type_slug: string;
    slug: string;
    filterCategory: Array<string>;
    sortField: string;
    sortType: string;
    pagination: PaginationData;
}
