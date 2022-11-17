import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { IssueContainer, Heading, FootNote, ToggleContainer } from '../components';
import { fetchIssues } from '../store';
import { coverToggleIdList, useApiData } from '../utils';
import type { IssueData } from '../store';
import styles from '../../App.styles';

const MagazineIssueScreen = () => {
    const { data, error, isLoading } = useApiData<IssueData>(fetchIssues);
    const [filters, setFilters] = useState<string[]>(coverToggleIdList);
    const [filteredIssues, setFilteredIssues] = useState(data?.issues);

    /**
     * @description As soon as filter changes or data, this effect will run
     * to update UI with filtered data
     */
    useEffect(() => {
        if (data !== undefined) {
            const filteredList = data.issues.filter((item) => {
                return filters.includes(item.cover);
            });
            setFilteredIssues(filteredList);
        }
    }, [filters, data]);

    /**
     * @description callback function to add to filters, this will be
     * called from ToggleItem component
     *  @param filterId points to the issue cover name in the API data
     */
    const addToFilter = (filterId: string) => {
        setFilters((prevFilters) => {
            // copy previous filters and update along with new
            return [...prevFilters, filterId];
        });
    };

    /**
     * @description callback function to remove from the applied filters, this will be
     * called from ToggleItem component
     * @param filterId points to the issue cover name in the API data
     */
    const removeFromFilter = (filterId: string) => {
        setFilters((prevFilters) => {
            return prevFilters.filter((item) => item !== filterId);
        });
    };

    return (
        <SafeAreaView style={styles.flexOne} testID="MagazineIssueContainer">
            <View style={styles.contentContainer}>
                <Heading size={24}>Magazine issues</Heading>
                <ToggleContainer filters={filters} addToFilter={addToFilter} removeFromFilter={removeFromFilter} />
                <IssueContainer issues={filteredIssues} isLoading={isLoading} error={error} />
            </View>
            <FootNote />
        </SafeAreaView>
    );
};

export default MagazineIssueScreen;
