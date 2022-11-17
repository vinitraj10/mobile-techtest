import React from 'react';
import { View, Text, Linking } from 'react-native';
import { WHICH_JOIN_URL } from '../utils';
import styles from './styles/FootNote.style';

const FootNote = () => {
    const onWhichClick = () => {
        Linking.openURL(WHICH_JOIN_URL);
    };

    return (
        <View style={styles.footer}>
            <Text>
                The full archive is available to{' '}
                <Text style={styles.whichLink} onPress={onWhichClick}>
                    Which?
                </Text>{' '}
                members
            </Text>
        </View>
    );
};

export default React.memo(FootNote);
