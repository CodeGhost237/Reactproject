export function Input({placeholder, value, label, onChange,type}){

    const style = {fontSize: "19px"}

    return(
    <>
        <input type={type}
        placeholder={placeholder}
        value={value}
        onChange={e =>onChange(e.target.value)}
        className="form-control my-3"
        style={style}
        />
    </>
    )
}