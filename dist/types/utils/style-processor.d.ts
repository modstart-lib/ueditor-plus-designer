/**
 * 样式处理器 - 用于处理DOM元素的内联样式
 */
declare class Processor {
    private element;
    private styles;
    private static readonly prefixes;
    /**
     * 绑定DOM元素并解析样式
     */
    dom(element: HTMLElement): this;
    /**
     * 解析元素的style属性
     */
    private parse;
    /**
     * 移除样式属性
     */
    remove(key: string): this;
    /**
     * 移除DOM属性
     */
    removeDomAttr(attrName: string): this;
    /**
     * 获取带前缀的样式键名
     */
    private getStyleKeys;
    /**
     * 设置样式值（支持回调处理）
     */
    private setStyleValues;
    /**
     * 合并样式
     */
    merge(key: string, value: string | number): this;
    /**
     * 获取样式值
     */
    get(key: string, defaultValue?: any): any;
    /**
     * 将样式应用到DOM元素
     */
    toDom(): this;
}
/**
 * 样式处理器工厂
 */
export declare const StyleProcessor: {
    /**
     * 从DOM元素创建处理器
     */
    fromDom(element: HTMLElement): Processor;
};
export {};
