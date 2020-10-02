
import React from 'react'
import { Text } from 'react-native'

import { Picker } from '@react-native-community/picker'

type Props = {
    value: string,
    items: any,
    onChange: any
}

class PickerAndroid extends React.Component<Props> {

    render() {

        const {
            props,
        } = this

        return (
            <>
                <Picker
                    selectedValue={props.value}
                    style={{height: 50, width: 100}}
                    onValueChange={(value, index) => props.onChange(value, index)}
                >
                    {props.items.map((item: any, i: number) => (
                        <Picker.Item key={i} label={item.label} value={item.value} />
                    ))}
                </Picker>
            </>
        )
    }
}

export default PickerAndroid
