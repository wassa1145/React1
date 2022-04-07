export const Button = (props) => {
    return <button className="form__bottom" disabled={props.disabled} onClick={props.click}>{props.name}</button>
}
