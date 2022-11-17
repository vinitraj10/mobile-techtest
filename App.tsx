import React from 'react';
import type { ReactElement } from 'react';
import { View } from 'react-native';
import styles from './App.styles';
import { MagazineIssueScreen } from './src/screens';

const App: () => ReactElement = () => {
    return (
        <View style={styles.container}>
            <MagazineIssueScreen />
        </View>
    );
};

export default App;
