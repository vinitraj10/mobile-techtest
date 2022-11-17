import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { FootNote } from '.';
import { Issue } from '../store/types';
import Loader from './Loader';


interface IssueContainerProps {
    issues: any;
    isLoading: boolean;
    error?: string;

}
const Issues = (props: IssueContainerProps) => {
    const { error, isLoading, issues } = props;
    const renderIssueItem = ({ item }: { item: Issue }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 16, padding: 16, borderWidth: 1, borderRadius: 5, borderColor: '#ddd' }}>
                <Text style={{flex:1}}>{item.issue}</Text>
                <Image 
                    source={{ uri: item.uri }} 
                    style={{
                        width: 50,
                        height: 50,
                }}/>
            </View>
        )
    }

    if (isLoading) {
        return <Loader />
    } else if (error) {
        return <Text>{error}</Text>
    }
    return (
        <FlatList 
            data={issues} 
            renderItem={renderIssueItem} 
            showsHorizontalScrollIndicator={false} 
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <Text>No data available Please Tweak Filters</Text>}
            ListFooterComponent={FootNote} 
        />
    );
}

export default Issues;