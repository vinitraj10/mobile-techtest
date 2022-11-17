import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { FilterItem } from '../store';
import styles from './styles/ToggleItem.style';
import type { FilterMethods } from './ToggleContainer';

type ToggleItemProps = {
    filterItem: FilterItem;
    isSelected: boolean;
} & FilterMethods;

const ToggleItem = (props: ToggleItemProps) => {
    const { filterItem, isSelected, addToFilter, removeFromFilter } = props;

    /**
     * @description callback function to be called when toggle is pressed
     * it conditionally calls update filter methods based on if filter is
     * selected.
     */
    const onPressValue = () => {
        if (isSelected) {
            removeFromFilter(filterItem.id);
        } else {
            addToFilter(filterItem.id);
        }
    };

    // if toggle is selected update the color accordingly
    const buttonColorStyle = {
        backgroundColor: isSelected ? 'green' : 'white',
    };

    return (
        <TouchableOpacity
            onPress={onPressValue}
            style={[styles.toggleItem, buttonColorStyle]}
            testID={`Toggle${filterItem.label}`}
        >
            <Text>{filterItem.label}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(ToggleItem);
