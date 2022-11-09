const Container = props => {
    // 25%% margin container
    return (
        <div className="container">{props.children}</div>
    );
}

export default Container;

export const Container2 = props => {
    // 8% margin container
    return (
        <div className="container2">{props.children}</div>
    );
}

export const Container3 = props => {
    // 6% margin container
    return (
        <div className="container3">{props.children}</div>
    );
}