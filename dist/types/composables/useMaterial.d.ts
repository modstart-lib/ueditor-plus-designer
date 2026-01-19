import { MaterialCategory, MaterialItem, MaterialQueryParams, DesignerConfig } from '../types';
/**
 * 素材管理 Composable
 */
export declare function useMaterial(config: DesignerConfig): {
    categories: import('vue').Ref<{
        id: number | string;
        title: string;
        pid?: number | string | undefined;
        sort?: number | undefined;
        _child?: /*elided*/ any[] | undefined;
    }[], MaterialCategory[] | {
        id: number | string;
        title: string;
        pid?: number | string | undefined;
        sort?: number | undefined;
        _child?: /*elided*/ any[] | undefined;
    }[]>;
    materials: import('vue').Ref<{
        [x: string]: any;
        id: number | string;
        title: string;
        html: string;
        categoryId?: number | string | undefined;
        cover?: string | undefined;
    }[], MaterialItem[] | {
        [x: string]: any;
        id: number | string;
        title: string;
        html: string;
        categoryId?: number | string | undefined;
        cover?: string | undefined;
    }[]>;
    total: import('vue').Ref<number, number>;
    loading: import('vue').Ref<boolean, boolean>;
    loadingMore: import('vue').Ref<boolean, boolean>;
    loadingCategories: import('vue').Ref<boolean, boolean>;
    currentCategory: import('vue').Ref<string | number, string | number>;
    keywords: import('vue').Ref<string, string>;
    currentPage: import('vue').Ref<number, number>;
    hasMore: import('vue').Ref<boolean, boolean>;
    loadMaterials: (params?: MaterialQueryParams, append?: boolean) => Promise<void>;
    loadMore: () => Promise<void>;
    changeCategory: (categoryId: number | string) => void;
    search: (keyword: string) => void;
};
