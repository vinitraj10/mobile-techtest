import React, { useEffect } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';




interface ToggleProps {
    addToFilter: (value: string) => void; // add value to filters in parent state
    removeFromFilter: (value: string) => void; // remove value from filters in parent state
    value: string;
    isSelected: boolean;
}


const Toggle = (props: ToggleProps) => {
    const { value, isSelected, addToFilter, removeFromFilter } = props;

    let toggleStyle: ViewStyle = {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    }
    const onPressValue = () => {
        if (isSelected) {
            removeFromFilter(value);
        } else {
            addToFilter(value);
        }
    }


    return (
        <TouchableOpacity onPress={onPressValue} style={[toggleStyle, {
            backgroundColor: isSelected ? 'green': 'white'
        }]} >
            <Text>{value}</Text>
        </TouchableOpacity>
    );
}

export default Toggle;