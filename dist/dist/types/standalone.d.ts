import { DesignerConfig } from './types';
interface DesignerInstance {
    mount: (container: string | HTMLElement) => void;
    unmount: () => void;
    getContent: () => string;
    setContent: (content: string) => void;
    on: (event: string, callback: Function) => void;
    off: (event: string, callback: Function) => void;
}
/**
 * Create a designer instance
 */
declare function createDesigner(config?: DesignerConfig): DesignerInstance;
export { createDesigner };
declare const _default: {
    createDesigner: typeof createDesigner;
};
export default _default;
