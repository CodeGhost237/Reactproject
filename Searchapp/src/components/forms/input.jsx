export function input({placeholder, value, onChange}){

    return(
        <>
           <input type="text"
           className="form-control"
           value={value}
           placeholder={placeholder}
           onChange={(e) => onChange(e.target.value)}
           /> 
        </>
    )

}