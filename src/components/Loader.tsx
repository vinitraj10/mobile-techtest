import React from 'react';
import type { ActivityIndicatorProps } from 'react-native';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/Loader.style';

const Loader = (props: ActivityIndicatorProps) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator {...props} />
        </View>
    );
};

export default Loader;
