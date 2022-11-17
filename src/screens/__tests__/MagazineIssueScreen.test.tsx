import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import MagazineIssueScreen from '../MagazineIssueScreen';
import * as apiHook from '../../utils/hooks';
import data from '../../store/data.json';

jest.spyOn(apiHook, 'useOrientation').mockReturnValue(apiHook.ORIENTATION.PORTRAIT);
describe('Magazine Issue Screen test', () => {
    it('Items should be loaded correctly if data exists', () => {
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data: {
                issues: [
                    {
                        issue: 'September 2022',
                        uri: 'mock uri',
                        cover: 'Which? Computing',
                    },
                ],
            },
            isLoading: false,
            error: '',
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        expect(getByTestId('IssueItemContainer').props.data.length).toEqual(1);
    });

    it('Remove filter should change color to white of the toggle button', () => {
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data,
            isLoading: false,
            error: '',
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        fireEvent(getByTestId('ToggleComputing'), 'press');
        expect(getByTestId('ToggleComputing').props.style.backgroundColor).toEqual('white');
    });

    it('Apply toggle should change color to green of the toggle button', () => {
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data,
            isLoading: false,
            error: '',
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        // to test apply toggle, deselecting the toggle initially
        fireEvent(getByTestId('ToggleGardening'), 'press');
        fireEvent(getByTestId('ToggleGardening'), 'press');
        expect(getByTestId('ToggleGardening').props.style.backgroundColor).toEqual('green');
    });

    it('Issue container list should be empty if data is not returned from API', () => {
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data: undefined,
            isLoading: false,
            error: '',
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        expect(getByTestId('IssueItemContainer').props.data).toBeUndefined();
    });

    it('Api error should show proper error message', () => {
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data: undefined,
            isLoading: false,
            error: 'Test error message',
        });
        const { getByText } = render(<MagazineIssueScreen />);
        expect(getByText('Test error message')).toBeDefined();
    });
});
