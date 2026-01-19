import { MaterialQueryParams, MaterialCategory, StyleListData } from '../types';
interface MaterialAPIResponse {
    code: number;
    msg: string;
    data: {
        page: number;
        pageSize: number;
        total: number;
        records: RawMaterial[];
    };
}
interface RawMaterial {
    id: number;
    title: string;
    tags?: string[];
    html: string;
    [key: string]: any;
}
/**
 * Fetch categories from API
 */
export declare function fetchCategories(): Promise<MaterialCategory[]>;
/**
 * Fetch materials from API with pagination and filters
 */
export declare function fetchMaterials(params?: MaterialQueryParams): Promise<MaterialAPIResponse['data']>;
/**
 * Default category loader function
 * Fetches only categories
 */
export declare function defaultCategoryLoader(): Promise<MaterialCategory[]>;
/**
 * Default style loader function
 * Fetches materials based on query parameters
 */
export declare function defaultStyleLoader(params?: MaterialQueryParams): Promise<StyleListData>;
export {};
