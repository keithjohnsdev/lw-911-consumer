export const BlueGradientBtn = props => {
    return <button className="blue-gradient-btn" onClick={props.onClick}>{props.children}</button>
}

export const RedGradientBtn = props => {
    return <button className="red-gradient-btn" onClick={props.onClick}>{props.children}</button>
}

export default BlueGradientBtn;