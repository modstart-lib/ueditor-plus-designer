/**
 * React wrapper for Vue Designer component using veaury
 *
 * This component bridges the Vue Designer component to React applications.
 * It maintains all the functionality of the original Vue component while
 * providing a React-compatible interface.
 */
export interface DesignerConfig {
    /** Container element or selector */
    container?: HTMLElement | string;
    /** UEditor path */
    ueditorPath?: string;
    /** UEditor config */
    ueditorConfig?: Record<string, any>;
    /** Category loader */
    categoryLoader?: () => Promise<any[]>;
    /** Style loader */
    styleLoader?: (params?: any) => Promise<any>;
    /** Ready callback */
    onReady?: () => void;
    /** Change callback */
    onChange?: (content: string) => void;
}
export interface DesignerProps {
    /** Designer configuration */
    config?: DesignerConfig;
    /** Whether in iframe mode */
    isIframe?: boolean;
    /** Ready event handler */
    onReady?: () => void;
    /** Change event handler */
    onChange?: (content: string) => void;
    /** Confirm event handler (iframe mode) */
    onConfirm?: (content: string) => void;
}
export interface DesignerRef {
    /** Get editor content */
    getContent: () => string;
    /** Set editor content */
    setContent: (content: string) => void;
}
export declare const UEditorPlusDesigner: import('react').ForwardRefExoticComponent<Omit<any, "ref"> & import('react').RefAttributes<unknown>>;
export default UEditorPlusDesigner;
