/**
 * Section操作 Composable
 */
export declare function useSectionActions(): {
    clearSectionFormat: (editor: any, section: HTMLElement) => void;
    insertSection: (editor: any, section: HTMLElement, position: "before" | "after") => void;
    selectSection: (editor: any, section: HTMLElement) => void;
    deleteSection: (editor: any, section: HTMLElement) => void;
    moveSectionUp: (editor: any, section: HTMLElement) => void;
    moveSectionDown: (editor: any, section: HTMLElement) => void;
};
