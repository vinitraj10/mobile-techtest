import { render } from '@testing-library/react-native';
import React from 'react';
import App from './App';

describe('<App />', () => {
    it('should be able to render a title', () => {
        const { getByTestId } = render(<App />);
        // checks if Magazine screen loaded correctly
        // rest all has been tested under MagazineIssue tests
        expect(getByTestId('MagazineIssueContainer')).toBeDefined();
    });
});
