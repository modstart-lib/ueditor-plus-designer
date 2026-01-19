import { DesignerConfig } from '../types';
interface Props {
    config?: DesignerConfig;
    isIframe?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {
    getContent: () => string;
    setContent: (content: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (content: string) => any;
    ready: () => any;
    confirm: (content: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onChange?: ((content: string) => any) | undefined;
    onReady?: (() => any) | undefined;
    onConfirm?: ((content: string) => any) | undefined;
}>, {
    config: DesignerConfig;
    isIframe: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
