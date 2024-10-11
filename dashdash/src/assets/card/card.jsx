export function Card({ label, date, img, password}) {

    const style = {fontSize : "15px"}

    return (
        <form className="container">
            <button type="submit" className="card w-100 shadow-sm mb-2" title={label}>
                <div className="card-body d-flex justify-content-between align-items-center w-100">

                    <div className="pe-3 border-end me-3">
                        <img src={img} alt={label} title={label} className="card-img mr-5" width={30} height={30} />
                    </div>
                        <h5 className="card-title" style={style}>{label}</h5>
                        <h5 className="card-password" style={style}>{password}</h5>
                        <p className="card-date" style={style}>{date}</p>
                </div>
            </button>
        </form>
    );
}
