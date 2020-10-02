
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './IOSAccesoryView.styles'

type Props = {
    doneText: string,
    
    onUpPress?: any,
    onDownPress?: any,
    onDonePress: any
}

type State = {
    donePressed: boolean
}

class PickerIOSAccesoryView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = {
            donePressed: false
        }
    }

    render() {

        const {
            props,
            state,
        } = this

        return (
            <View style={styles.viewContainer}>
                <View style={styles.arrowsContainer}>
                    {!props.onUpPress ? null : (
                        <TouchableOpacity
                            onPress={() => props.onUpPress()}
                        >
                            <View style={[styles.arrow, styles.arrowUp]} />
                        </TouchableOpacity>
                    )}
                    {!props.onDownPress ? null : (
                        <TouchableOpacity
                            onPress={() => props.onDownPress()}
                        >
                            <View style={[styles.arrow, styles.arrowDown]} />
                        </TouchableOpacity>
                    )}
                </View>
                <TouchableOpacity
                    // activeOpacity={1}
                    onPress={() => props.onDonePress()}
                    onPressIn={() => {
                        this.setState({ donePressed: true });
                    }}
                    onPressOut={() => {
                        this.setState({ donePressed: false });
                    }}
                    hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}
                >
                    <View>
                        <Text style={[
                            styles.doneText,
                            state.donePressed ? styles.doneTextPressed : {}
                        ]}>
                            {props.doneText}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default PickerIOSAccesoryView
