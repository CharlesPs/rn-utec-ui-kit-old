import React from 'react';
import { View } from 'react-native';
const Icon = () => {
    return (<View style={{
        position: 'absolute',
        right: 14,
        top: 15,
    }}>
            <View style={{
        backgroundColor: "transparent",
        borderTopWidth: 7,
        borderTopColor: "black",
        borderRightWidth: 7,
        borderRightColor: "transparent",
        borderLeftWidth: 7,
        borderLeftColor: "transparent",
        width: 0,
        height: 0
    }}/>
        </View>);
};
export default Icon;
