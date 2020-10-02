declare const styles: {
    viewContainer: {
        height: number;
        flexDirection: "row";
        justifyContent: "space-between";
        alignItems: "center";
        paddingHorizontal: number;
        backgroundColor: string;
        borderTopWidth: number;
        borderTopColor: string;
        zIndex: number;
    };
    arrowsContainer: {
        flexDirection: "row";
    };
    arrow: {
        width: number;
        height: number;
        backgroundColor: string;
        borderColor: string;
        borderTopWidth: number;
        borderRightWidth: number;
    };
    arrowUp: {
        marginLeft: number;
        transform: ({
            translateY: number;
            rotate?: undefined;
        } | {
            rotate: string;
            translateY?: undefined;
        })[];
    };
    arrowDown: {
        marginLeft: number;
        transform: ({
            translateY: number;
            rotate?: undefined;
        } | {
            rotate: string;
            translateY?: undefined;
        })[];
    };
    doneText: {
        color: string;
        fontWeight: "600";
        fontSize: number;
        paddingTop: number;
        paddingRight: number;
    };
    doneTextPressed: {};
};
export default styles;
