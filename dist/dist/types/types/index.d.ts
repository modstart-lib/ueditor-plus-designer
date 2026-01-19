/**
 * 编辑器配置接口
 */
export interface DesignerConfig {
    /** 容器元素或选择器 */
    container?: HTMLElement | string;
    /** UEditor路径 */
    ueditorPath?: string;
    /** UEditor配置（透传给UEditor实例） */
    ueditorConfig?: UEditorConfig;
    /** 分类加载器 */
    categoryLoader?: () => Promise<MaterialCategory[]>;
    /** 素材列表加载器 */
    styleLoader?: (params?: MaterialQueryParams) => Promise<StyleListData>;
    /** 就绪回调 */
    onReady?: () => void;
    /** 内容变化回调 */
    onChange?: (content: string) => void;
}
/**
 * 素材查询参数
 */
export interface MaterialQueryParams {
    /** 分类ID */
    categoryId?: number | string;
    /** 关键词 */
    keywords?: string;
    /** 页码 */
    page?: number;
    /** 每页数量 */
    pageSize?: number;
}
/**
 * 素材列表响应数据
 */
export interface StyleListData {
    /** 素材记录 */
    records: MaterialItem[];
    /** 总数 */
    total: number;
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    pageSize: number;
}
/**
 * 素材数据 (兼容旧版本)
 */
export interface MaterialData {
    /** 分类列表 */
    categories: MaterialCategory[];
    /** 素材记录 */
    records: MaterialItem[];
    /** 总数 */
    total?: number;
}
/**
 * 素材分类
 */
export interface MaterialCategory {
    id: number | string;
    title: string;
    pid?: number | string;
    sort?: number;
    _child?: MaterialCategory[];
}
/**
 * 素材项
 */
export interface MaterialItem {
    id: number | string;
    title: string;
    html: string;
    categoryId?: number | string;
    cover?: string;
    [key: string]: any;
}
/**
 * 图片项
 */
export interface ImageItem {
    path: string;
    name?: string;
    filename?: string;
    [key: string]: any;
}
/**
 * 视频项
 */
export interface VideoItem {
    path: string;
    name?: string;
    filename?: string;
    [key: string]: any;
}
/**
 * Section数据
 */
export interface SectionData {
    id: string;
    width: number;
    rotate: number;
    opacity: number;
    [key: string]: any;
}
/**
 * 编辑器实例接口
 */
export interface DesignerInstance {
    /** 获取内容 */
    getContent(): string;
    /** 设置内容 */
    setContent(content: string): void;
    /** 插入Section */
    insertSection(html: string, options?: any): void;
    /** 销毁编辑器 */
    destroy(): void;
    /** 事件监听 */
    on(event: string, callback: Function): void;
    /** 移除事件监听 */
    off(event: string, callback?: Function): void;
    /** 布局调整 */
    doLayout(): void;
    /** 获取编辑器实例 */
    getEditor(): any;
}
/**
 * UEditor配置
 */
export interface UEditorConfig {
    serverUrl?: string;
    toolbars?: string[][];
    autoHeightEnabled?: boolean;
    imagePopup?: boolean;
    iframeCssStylesAddition?: string[];
    [key: string]: any;
}
