export function Input({placeholder, value,type}){

    const style = {fontSize: "15px"}

    return(
    <>
        <input type={type}
        placeholder={placeholder}
        value={value}
        className="form-control my-3"
        style={style}
        />
    </>
    )
}