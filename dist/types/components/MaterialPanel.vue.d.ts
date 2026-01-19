import { MaterialCategory, MaterialItem } from '../types';
interface Props {
    categories: MaterialCategory[];
    materials: MaterialItem[];
    total: number;
    currentCategory: number | string;
    loading?: boolean;
    loadingMore?: boolean;
    hasMore?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    search: (keyword: string) => any;
    select: (item: MaterialItem) => any;
    "change-category": (categoryId: string | number) => any;
    "load-more": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onSearch?: ((keyword: string) => any) | undefined;
    onSelect?: ((item: MaterialItem) => any) | undefined;
    "onChange-category"?: ((categoryId: string | number) => any) | undefined;
    "onLoad-more"?: (() => any) | undefined;
}>, {
    loading: boolean;
    loadingMore: boolean;
    hasMore: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
