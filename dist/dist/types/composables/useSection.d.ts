import { SectionData } from '../types';
/**
 * Section样式管理 Composable
 */
export declare function useSection(): {
    currentSection: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    currentElement: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
    sectionData: import('vue').Ref<{
        [x: string]: any;
        id: string;
        width: number;
        rotate: number;
        opacity: number;
    }, SectionData | {
        [x: string]: any;
        id: string;
        width: number;
        rotate: number;
        opacity: number;
    }>;
    imageData: import('vue').Ref<{
        show: boolean;
        element: HTMLElement | null;
        width: number;
        opacity: number;
    }, {
        show: boolean;
        element: HTMLElement | null;
        width: number;
        opacity: number;
    } | {
        show: boolean;
        element: HTMLElement | null;
        width: number;
        opacity: number;
    }>;
    prepareSectionStyle: (section: HTMLElement) => void;
    prepareImageStyle: (section: HTMLElement, img: HTMLElement) => void;
    clearSelection: () => void;
};
