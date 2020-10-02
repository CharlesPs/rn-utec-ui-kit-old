import React from 'react';
declare type Props = {
    doneText: string;
    onUpPress?: any;
    onDownPress?: any;
    onDonePress: any;
};
declare type State = {
    donePressed: boolean;
};
declare class PickerIOSAccesoryView extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export default PickerIOSAccesoryView;
