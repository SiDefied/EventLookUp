import React from 'react'
import "./Operations.css"
import {Link} from "react-router-dom"
function Operations() {
    return (
        <div className="operations">
            <div className="row justify-content-center">
                <div className="card col-3 me-5 my-5">
                    <img src ="https://dxwk1elgxoukt.cloudfront.net/website-content/uploads/2021/03/06204305/promote-your-event.png" alt="view-events" />
                    <h5>List your event with EventLookUp</h5>
                    <div className="text">
                        <p>Let your event reach the desired audience by listing your event with us!!</p>
                    </div>
                    <Link to = "/events/add" className="btn btn-primary">Create Event</Link>
                </div>            
                <div className="card col-3 mx-5 my-5">
                    <img src ="https://media.istockphoto.com/vectors/upcoming-events-neon-signs-vector-upcoming-events-design-template-vector-id978975308?k=20&m=978975308&s=612x612&w=0&h=HnwHCKofUyVji7q4Vqpg9VI0avrWdF8hr-nA5EATfmk=" alt = "event-view"/>
                    <h5>All Events</h5>
                    <div className="text">
                        <p>Checkout all the amazing listed events!!</p>
                    </div>
                    <Link to = "/events/view" className="btn btn-primary mb-3"> View</Link>
                </div>            
            </div>
            
        </div>
    )
}

export default Operations
