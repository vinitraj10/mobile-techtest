import React from 'react';
import type { ActivityIndicatorProps } from 'react-native';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = (props: ActivityIndicatorProps) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Loader;
