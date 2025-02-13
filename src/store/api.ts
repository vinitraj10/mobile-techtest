import type { IssueData } from './types';

// can be moved to some constant file to store error code
const errors = {
    FETCH_ISSUE_ERROR: 'Error occurred while parsing data',
};

/**
 * @description Wraps issue data with mock promise to give a feel of
 *  an API call in the UI with inferred data type of mock data.
 * @returns promise to resolve the data return from json file
 */
export const fetchIssues = () => {
    return new Promise<IssueData>((resolve, reject) => {
        setTimeout(() => {
            const data = require('./fixtures/data.json');
            if (data !== undefined && data.issues) {
                resolve(data);
            } else {
                reject(errors.FETCH_ISSUE_ERROR);
            }
        }, 1000);
    });
};
