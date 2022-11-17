import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import MagazineIssueScreen from '../MagazineIssueScreen';
import * as apiHook from '../../utils/hooks';
import data from '../../store/data.json';

describe('Magazine Issue Screen test', () => {
    it('Items should be loaded correctly if data exists', () => {
        jest.spyOn(apiHook, 'useOrientation').mockReturnValue(apiHook.ORIENTATION.PORTRAIT);
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data: {
                issues: [
                    {
                        issue: 'September 2022',
                        uri: 'mock uri',
                        cover: 'mock cover',
                    },
                ],
            },
            isLoading: false,
            error: undefined,
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        expect(getByTestId('IssueItemContainer').props.data.length).toEqual(1);
    });

    it('Remove filter should change color to white of the toggle button', () => {
        jest.spyOn(apiHook, 'useOrientation').mockReturnValue(apiHook.ORIENTATION.PORTRAIT);
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data,
            isLoading: false,
            error: undefined,
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        fireEvent(getByTestId('ToggleSeptember 2022'), 'press');
        expect(getByTestId('ToggleSeptember 2022').props.style.backgroundColor).toEqual('white');
    });

    it('Apply toggle should change color to green of the toggle button', () => {
        jest.spyOn(apiHook, 'useOrientation').mockReturnValue(apiHook.ORIENTATION.PORTRAIT);
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data,
            isLoading: false,
            error: undefined,
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        // to test apply toggle, deselecting the toggle initially
        fireEvent(getByTestId('ToggleSeptember 2022'), 'press');
        fireEvent(getByTestId('ToggleSeptember 2022'), 'press');
        expect(getByTestId('ToggleSeptember 2022').props.style.backgroundColor).toEqual('green');
    });

    it('Issue container list should be empty if data is not returned from API', () => {
        jest.spyOn(apiHook, 'useOrientation').mockReturnValue(apiHook.ORIENTATION.PORTRAIT);
        jest.spyOn(apiHook, 'useApiData').mockReturnValue({
            data: undefined,
            isLoading: false,
            error: undefined,
        });
        const { getByTestId } = render(<MagazineIssueScreen />);
        expect(getByTestId('IssueItemContainer').props.data).toBeUndefined();
    });
});
