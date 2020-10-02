
import React from 'react'
import { TextInput, Modal, Text, TouchableOpacity, View } from 'react-native'

import { Picker } from '@react-native-community/picker'
import IOSAccesoryView from './Components/IOSAccesoryView'
import Icon from './Components/Icon'

type Props = {
    value: string,
    items: any,
    doneText?: string,

    onChange: any
}

type State = {
    visible: boolean,
    doneText: string,
}

const getInitialState = (props: Props) => {
    
    return {
        visible: false,
        doneText: props.doneText || 'Done'
    }
}

class PickerIOS extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)

        this.state = getInitialState(props)
    }

    getItemLabel(value: string) {

        let label = ''

        this.props.items.map((item: any) => {

            if (item.value === value) {

                label = item.label
            }
        })

        return label
    }

    render() {

        const {
            props,
            state,
        } = this

        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.setState({ visible: true })}
                    activeOpacity={1}
                >
                    <View pointerEvents="box-only">
                        <TextInput
                            value={this.getItemLabel(props.value)}
                            editable={false}
                            style={{
                                fontSize: 10,
                                // fontFamily: Fonts.regular,
                                paddingVertical: 10,
                                paddingRight: 30,
                                paddingLeft: 10,
                                borderRadius: 5,
                                color: "#000",
                                backgroundColor: "#fff",
                                borderColor: "#c7c7c7",
                                borderWidth: 1,
                            }}
                        />
                        <Icon />
                    </View>
                        
                </TouchableOpacity>
                <Modal
                    visible={state.visible}
                    transparent
                    // animationType
                >
                    <TouchableOpacity
                        onPress={() => this.setState({ visible: false })}
                        style={{
                            flex: 1
                        }}
                    />
                    <IOSAccesoryView 
                        doneText={state.doneText}
                        onDonePress={() => this.setState({ visible: false })}
                    />
                    <View 
                        style={{
                            backgroundColor: '#d0d4da',
                            height: 215,
                            justifyContent: 'center',
                        }}
                    >
                        <Picker
                            selectedValue={props.value}
                            onValueChange={(value, index) => props.onChange(value, index)}
                        >
                            {props.items.map((item: any, i: number) => (
                                <Picker.Item key={i} 
                                    label={item.label} 
                                    value={item.value} 
                                />
                            ))}
                        </Picker>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default PickerIOS
