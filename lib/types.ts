export interface InfoCardStrings {
    title: string;
    description: string[];
}

export interface CourseSelectionLocale {
    pageTitle?: string;
    infoCards?: InfoCardStrings[];
    [key: string]: unknown;
}
