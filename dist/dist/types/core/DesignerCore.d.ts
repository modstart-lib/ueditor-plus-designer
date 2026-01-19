import { DesignerConfig, DesignerInstance } from '../types';
/**
 * 编辑器核心类 - 框架无关的纯JS实现
 */
export declare class DesignerCore implements DesignerInstance {
    private config;
    private container;
    private editor;
    private editorId;
    private eventHandlers;
    private resizeHandler;
    private editorElement;
    constructor(config: DesignerConfig);
    /**
     * 初始化编辑器
     */
    init(): Promise<void>;
    /**
     * 注册UI插件 - 必须在 UE.getEditor() 调用前执行
     */
    private registerUIPlugin;
    /**
     * 获取内容
     */
    getContent(): string;
    /**
     * 设置内容
     */
    setContent(content: string): void;
    /**
     * 插入Section
     */
    insertSection(html: string, options?: any): void;
    /**
     * 布局调整 - 自适应高度
     */
    doLayout(): void;
    /**
     * 设置resize监听器
     */
    private setupResizeListener;
    /**
     * 销毁编辑器
     */
    destroy(): void;
    /**
     * 事件监听
     */
    on(event: string, callback: Function): void;
    /**
     * 移除事件监听
     */
    off(event: string, callback?: Function): void;
    /**
     * 触发事件
     */
    private emit;
    /**
     * 获取编辑器实例（UEditor原生实例）
     */
    getEditor(): any;
}
