
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    viewContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#dedede',
        zIndex: 2,
    },
    arrowsContainer: {
        flexDirection: 'row',
    },
    arrow: {
        width: 15,
        height: 15,
        backgroundColor: 'transparent',
        borderColor: '#a1a1a1',
        borderTopWidth: 1.5,
        borderRightWidth: 1.5,
    },
    arrowUp: {
        marginLeft: 11,
        transform: [{ translateY: 4 }, { rotate: '-45deg' }],
    },
    arrowDown: {
        marginLeft: 22,
        transform: [{ translateY: -5 }, { rotate: '135deg' }],
    },
    doneText: {
        color: '#007aff',
        fontWeight: '600',
        fontSize: 17,
        paddingTop: 1,
        paddingRight: 11,
    },
    doneTextPressed: {
        // fontSize: 19,
    },
})

export default styles
