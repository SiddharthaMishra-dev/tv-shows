import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Singleshow=()=>{
    const {showId}=useParams();
    const [object,setObject]=useState({})
    const [summary,setSummary]=useState('')
    const getSummary=async()=>{
        const response= await fetch(`https://api.tvmaze.com/shows/${showId}`)
        const result= await response.json()
        console.log(result) 
        setObject(result)   
        console.log(result["image"]["medium"])
        setSummary(result["summary"])
    }
    useEffect(()=>{
        getSummary()
    },[])
    
    return (
        <div className="container mt-5 text-center">
            <h1>{object.name}</h1>
            {/* <img src={object["image"]["medium"]} alt={object.name} className="mb-3"/> */}
            <p className="fs-5" >
                {summary.replace( /(<([^>]+)>)/ig, '')}
            </p>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reservation">
                Reserve a seat
            </button>
            <div className="modal fade" id="reservation" tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content center">
                        <div className="modal-header">
                            <h3 className="modal-title f-5">Book a seat</h3>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input type="date" />
                                </div>
                                <div className="mb-3">

                                    <input type="checkbox" className="form-check-input" id="1"/>
                                    <input type="checkbox" className="form-check-input" id="2"/>
                                    <input type="checkbox" className="form-check-input" id="3"/>
                                    <input type="checkbox" className="form-check-input" id="4"/>
                                    <input type="checkbox" className="form-check-input" id="5"/>
                                    <input type="checkbox" className="form-check-input" id="6"/>
                                    <input type="checkbox" className="form-check-input" id="7"/>
                                    <input type="checkbox" className="form-check-input" id="8"/>

                                </div>
                                <div className="mb-3">

                                    <input type="checkbox" className="form-check-input" id="1"/>
                                    <input type="checkbox" className="form-check-input" id="2"/>
                                    <input type="checkbox" className="form-check-input" id="3"/>
                                    <input type="checkbox" className="form-check-input" id="4"/>
                                    <input type="checkbox" className="form-check-input" id="5"/>
                                    <input type="checkbox" className="form-check-input" id="6"/>
                                    <input type="checkbox" className="form-check-input" id="7"/>
                                    <input type="checkbox" className="form-check-input" id="8"/>

                                </div>
                                <div className="mb-3">

                                    <input type="checkbox" className="form-check-input" id="1"/>
                                    <input type="checkbox" className="form-check-input" id="2"/>
                                    <input type="checkbox" className="form-check-input" id="3"/>
                                    <input type="checkbox" className="form-check-input" id="4"/>
                                    <input type="checkbox" className="form-check-input" id="5"/>
                                    <input type="checkbox" className="form-check-input" id="6"/>
                                    <input type="checkbox" className="form-check-input" id="7"/>
                                    <input type="checkbox" className="form-check-input" id="8"/>

                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Singleshow;