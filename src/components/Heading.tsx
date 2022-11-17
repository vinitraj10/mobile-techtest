import React from 'react';
import { Text } from 'react-native';


type HeadingProps = {
    size: number; // can be constrained to small, large, extra large etc
    children?: string;
}
const Heading: React.FC<HeadingProps> = (props) => {
    const { size = 36 } = props;
    return (
        <Text style={{fontSize: size }}>{props.children}</Text>
    );
}

export default React.memo(Heading);