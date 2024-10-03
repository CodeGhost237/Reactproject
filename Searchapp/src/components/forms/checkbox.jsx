export function Checkbox({onChange, label, checked, id}){

    return (
        <div className="form-check">
            <input type="checkbox"
            id={id}
            className="form-check-input"
            checked = {checked}
            onChange={e => onChange(e.target.checked)}
            />
            <label className="form-checked-label" htmlFor={id}>{label}</label>
        </div>
    )
}