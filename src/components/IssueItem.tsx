import React from 'react';
import type { ViewStyle } from 'react-native';
import type { Issue } from '../store';
import { View, Text, Image } from 'react-native';
import { useRowItemCount } from '../utils';
import styles from './styles/IssueItem.style';

const IssueItem = ({ uri, issue, cover }: Issue) => {
    const rowItem = useRowItemCount();
    const direction: ViewStyle = rowItem > 1 ? { flexDirection: 'column' } : { flexDirection: 'row' };
    return (
        <View style={[styles.issueItemContainer, direction]}>
            <Image source={{ uri }} style={styles.issueImage} />
            <View style={styles.issueTextContainer}>
                <Text style={styles.coverStyle}>{cover}</Text>
                <Text style={styles.dateStyle}>{issue}</Text>
            </View>
        </View>
    );
};

export default IssueItem;
