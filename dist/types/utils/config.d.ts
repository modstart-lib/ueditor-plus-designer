import { defaultCategoryLoader, defaultStyleLoader } from './api-loader';
/**
 * 编辑器配置常量
 */
export declare const Config: {
    /** Section样式类名 */
    SectionClass: string;
    /** Section激活状态类名 */
    SectionActiveClass: string;
    /** Section悬停状态类名 */
    SectionHoverClass: string;
    /** 默认UEditor路径 */
    DefaultUEditorPath: string;
    /** 默认编辑器宽度 */
    DefaultWidth: string;
    /** 默认编辑器高度 */
    DefaultHeight: number;
    /** 默认启用自动布局 */
    DefaultAutoLayout: boolean;
    /** 默认分类加载器 */
    DefaultCategoryLoader: typeof defaultCategoryLoader;
    /** 默认素材列表加载器 */
    DefaultStyleLoader: typeof defaultStyleLoader;
};
/**
 * 默认UEditor工具栏配置
 */
export declare const DefaultUEditorPlusToolbars: string[][];
