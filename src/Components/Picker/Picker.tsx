
import React from 'react'
import { Platform } from 'react-native'

import PickerAndroid from './PickerAndroid'
import PickerIOS from './PickerIOS'

type Props = {
    value: string,
    items: any,
    onChange: any
}

class Picker extends React.Component<Props> {

    render() {

        const {
            props,
        } = this

        return (
            <>
                {Platform.OS === 'ios' ? (
                    <PickerIOS 
                        items={props.items}
                        value={props.value}
                        onChange={(value: string, index: number) => props.onChange(value)}
                        doneText="Terminar"
                    />
                ) : (
                    <PickerAndroid 
                        items={props.items}
                        value={props.value}
                        onChange={(value: string, index: number) => props.onChange(value)}
                    />
                )}
            </>
        )
    }
}

export default Picker
