import { SectionData } from '../types';
interface Props {
    sectionData: SectionData;
    imageData: {
        show: boolean;
        width: number;
        opacity: number;
    };
    position: {
        left: number;
        top: number;
    };
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    action: (action: string) => any;
    "image-action": (action: string) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onAction?: ((action: string) => any) | undefined;
    "onImage-action"?: ((action: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
