export type Issue = {
    issue: string;
    uri: string;
    cover: string;
};

export type IssueData = {
    issues: Array<Issue>;
};

export type FilterItem = {
    id: string;
    label: string;
};
