import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { IssueContainer, Heading, Toggle, FootNote } from '../components';
import { fetchIssues } from '../store';
import { useApiData } from '../utils';
import type { IssueData } from '../store';
import styles from '../../App.styles';

const toggleList = ['September 2022', 'August 2022', 'July 2022', 'June 2022'];

const MagazineIssueScreen = () => {
    const { data, error, isLoading } = useApiData<IssueData>(fetchIssues);
    const [filters, setFilters] = useState<string[]>(toggleList);
    const [filteredIssues, setFilteredIssues] = useState(data?.issues);

    useEffect(() => {
        if (data !== undefined) {
            const filteredList = data.issues.filter((item) => {
                return filters.includes(item.issue);
            });
            setFilteredIssues(filteredList);
        }
    }, [filters, data]);

    const addToFilter = (value: string) => {
        setFilters((prevFilters) => {
            // copy previous filters and update along with new
            return [...prevFilters, value];
        });
    };

    const removeFromFilter = (value: string) => {
        setFilters((prevFilters) => {
            return prevFilters.filter((item) => item !== value);
        });
    };

    // move to another component
    const renderToggles = (): JSX.Element => {
        return (
            <View>
                <FlatList
                    data={toggleList}
                    horizontal
                    renderItem={({ item }): JSX.Element => (
                        <Toggle
                            value={item}
                            isSelected={filters.includes(item)}
                            addToFilter={addToFilter}
                            removeFromFilter={removeFromFilter}
                        />
                    )}
                    persistentScrollbar
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.flexOne}>
            <View style={styles.contentContainer}>
                <Heading size={24}>Magazine issues</Heading>
                {renderToggles()}
                <IssueContainer issues={filteredIssues} isLoading={isLoading} error={error} />
            </View>
            <FootNote />
        </SafeAreaView>
    );
};

export default MagazineIssueScreen;
