import React from 'react';
declare type Props = {
    value: string;
    items: any;
    doneText?: string;
    onChange: any;
};
declare type State = {
    visible: boolean;
    doneText: string;
};
declare class PickerIOS extends React.Component<Props, State> {
    constructor(props: Props);
    getItemLabel(value: string): string;
    render(): JSX.Element;
}
export default PickerIOS;
