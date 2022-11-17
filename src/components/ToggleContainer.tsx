import React from 'react';
import { View, FlatList } from 'react-native';
import { coverToggleListMap } from '../utils';
import ToggleItem from './ToggleItem';

// this can be moved to some common type files
// of component where we can share props/data
// types between components
export type FilterMethods = {
    addToFilter: (value: string) => void;
    removeFromFilter: (value: string) => void;
};

type ToggleContainerProps = {
    filters: Array<string>;
} & FilterMethods;

const ToggleContainer = (props: ToggleContainerProps) => {
    const { filters, addToFilter, removeFromFilter } = props;
    return (
        <View>
            <FlatList
                data={coverToggleListMap}
                horizontal
                renderItem={({ item }): JSX.Element => (
                    <ToggleItem
                        filterItem={item}
                        isSelected={filters.includes(item.id)}
                        addToFilter={addToFilter}
                        removeFromFilter={removeFromFilter}
                    />
                )}
                persistentScrollbar
            />
        </View>
    );
};

export default React.memo(ToggleContainer);
