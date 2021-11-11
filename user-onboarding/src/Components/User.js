import React from "react"

const User = props => {
    return (
        <>
        <h2>{props.user.first_name} {props.user.last_name} </h2>
        <p>{props.user.email}</p>
        <img src={props.user.avatar} alt=""/>
        </>
    )
}

export default User;