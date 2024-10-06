export function Checkbox({onChange, label, checked, id}){

    const style = {cursor:"pointer"}

    return (
        <div className="form-check">
            <input type="checkbox"
            style={style}
            id={id}
            className="form-check-input"
            checked = {checked}
            onChange={e => onChange(e.target.checked)}
            />
            <label className="form-checked-label" style={style} htmlFor={id}>{label}</label>
        </div>
    )
}