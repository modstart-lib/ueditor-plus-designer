/**
 * UEditor动态加载器
 */
declare global {
    interface Window {
        UE?: any;
        UEDITOR_HOME_URL?: string;
    }
}
/**
 * 加载UEditor脚本
 */
export declare function loadUEditor(ueditorPath?: string): Promise<any>;
/**
 * 检查UEditor是否已加载
 */
export declare function isUEditorLoaded(): boolean;
/**
 * 获取UEditor实例（如果已加载）
 */
export declare function getUEditor(): any;
