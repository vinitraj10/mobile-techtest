import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const WHICH_JOIN_URL = `https://join.which.co.uk/join/subscribe?gclid=Cj0KCQiA1NebBhDDARIsAANiDD1GNh1dG1rSQ4u4qHuLU5gyb2581nH7hTl921YX6WLBBaORMVH5PdkaAhXwEALw_wcB&gclsrc=aw.ds&source_code=911CUJ`;
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

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#ddd',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whichLink: {
        color: 'blue',
        fontWeight: '800',
    },
});

export default FootNote;
