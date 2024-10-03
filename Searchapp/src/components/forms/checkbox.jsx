export function checkbox({onChange, label, checked}){

    return (
        <div className="">
            <input type="checkbox"
            className="form-check-input"
            checked = {checked}
            onChange={e => onChange(e.target.checked)}
            />
            <label className="form-checked-label" htmlFor="">{label}</label>
        </div>
    )
}