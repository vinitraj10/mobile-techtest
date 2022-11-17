import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';


interface LoaderProps extends ActivityIndicatorProps {};

const Loader = (props: LoaderProps) => {
    return (
        <ActivityIndicator {...props} />
    );
}

export default Loader;