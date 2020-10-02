import React from 'react';
import { Platform } from 'react-native';
import PickerAndroid from './PickerAndroid';
import PickerIOS from './PickerIOS';
class Picker extends React.Component {
    render() {
        const { props, } = this;
        return (<>
                {Platform.OS === 'ios' ? (<PickerIOS items={props.items} value={props.value} onChange={(value, index) => props.onChange(value)} doneText="Terminar"/>) : (<PickerAndroid items={props.items} value={props.value} onChange={(value, index) => props.onChange(value)}/>)}
            </>);
    }
}
export default Picker;
