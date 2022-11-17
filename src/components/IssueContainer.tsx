import React from 'react';
import type { Issue } from '../store/types';
import { Text, FlatList } from 'react-native';
import { useRowItemCount } from '../utils';
import Loader from './Loader';
import IssueItem from './IssueItem';

type IssueContainerProps = {
    issues?: Array<Issue>;
    isLoading: boolean;
    error?: string;
};

const Issues = (props: IssueContainerProps) => {
    const { error, isLoading, issues } = props;
    const rowItem = useRowItemCount();
    if (isLoading) {
        return <Loader />;
    } else if (error) {
        return <Text>{error}</Text>;
    }
    return (
        <FlatList
            data={issues}
            renderItem={({ item }) => <IssueItem {...item} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <Text>No data available Please Tweak Filters</Text>}
            key={rowItem}
            numColumns={rowItem}
            testID="IssueItemContainer"
        />
    );
};

export default React.memo(Issues);
