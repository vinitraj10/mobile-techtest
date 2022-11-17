import React, { useEffect, useState } from 'react';
import type { ViewStyle } from 'react-native';
import type { Issue } from '../store/types';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import FootNote from './FootNote';
import { ORIENTATION, useOrientation } from '../utils';
import AppStyles from '../../App.styles';
import Loader from './Loader';

type IssueContainerProps = {
    issues?: Array<Issue>;
    isLoading: boolean;
    error?: string;
};

const styles = StyleSheet.create({
    issueContainer: {
        margin: 16,
        padding: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
    },

    issueImage: {
        width: 100,
        height: 100,
    },
});
const Issues = (props: IssueContainerProps) => {
    const { error, isLoading, issues } = props;
    const orientation = useOrientation();
    const [rowItem, setRowItem] = useState(1);

    useEffect(() => {
        if (orientation === ORIENTATION.LANDSCAPE) {
            setRowItem(2);
        } else {
            setRowItem(1);
        }
    }, [orientation]);

    const renderIssueItem = ({ item }: { item: Issue }) => {
        const direction: ViewStyle = rowItem > 1 ? { flexDirection: 'column' } : { flexDirection: 'row' };
        return (
            <View style={[styles.issueContainer, direction]}>
                <Text style={AppStyles.flexOne}>{item.issue}</Text>
                <Image source={{ uri: item.uri }} style={styles.issueImage} />
            </View>
        );
    };

    if (isLoading) {
        return <Loader />;
    } else if (error) {
        return <Text>{error}</Text>;
    }
    return (
        <FlatList
            data={issues}
            renderItem={renderIssueItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <Text>No data available Please Tweak Filters</Text>}
            key={rowItem}
            numColumns={rowItem}
            testID="IssueItemContainer"
        />
    );
};

export default Issues;
