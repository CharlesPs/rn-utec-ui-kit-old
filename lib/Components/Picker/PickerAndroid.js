import React from 'react';
import { Picker } from '@react-native-community/picker';
class PickerAndroid extends React.Component {
    render() {
        const { props, } = this;
        return (<>
                <Picker selectedValue={props.value} style={{ height: 50, width: 100 }} onValueChange={(value, index) => props.onChange(value, index)}>
                    {props.items.map((item, i) => (<Picker.Item key={i} label={item.label} value={item.value}/>))}
                </Picker>
            </>);
    }
}
export default PickerAndroid;
