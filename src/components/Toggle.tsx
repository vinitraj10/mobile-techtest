import React from 'react';
import type { ViewStyle } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

type ToggleProps = {
    addToFilter: (value: string) => void; // add value to filters in parent state
    removeFromFilter: (value: string) => void; // remove value from filters in parent state
    value: string;
    isSelected: boolean;
};

const Toggle = (props: ToggleProps) => {
    const { value, isSelected, addToFilter, removeFromFilter } = props;

    const toggleStyle: ViewStyle = {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    };

    const onPressValue = () => {
        if (isSelected) {
            removeFromFilter(value);
        } else {
            addToFilter(value);
        }
    };

    const buttonColorStyle = {
        backgroundColor: isSelected ? 'green' : 'white',
    };

    return (
        <TouchableOpacity onPress={onPressValue} style={[toggleStyle, buttonColorStyle]} testID={`Toggle${value}`}>
            <Text>{value}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Toggle);
