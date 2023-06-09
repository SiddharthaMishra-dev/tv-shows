import { Link } from "react-router-dom"

const Show=(props)=>{
    return (
        <>
            <div className="col-lg-2 m-3 p-4 show text-center">
                <img src={props.show.show.image.medium} alt={props.show.show.name} />
                <h2>{props.show.show.name}</h2>
                <p>{props.show.show.status}</p>
                <p>{props.show.show.language}</p>
                <button className="btn btn-primary">
                    <Link to={`/show/${props.show.show.id}`}>Summary</Link>
                </button>
            </div>
        </>
    )
}
export default Show