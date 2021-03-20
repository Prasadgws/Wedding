import React from "react"
import {Redirect ,Route} from "react-router-dom"



const Protected =({component:Cmp,...rest}) =>{
    <Route
    {...rest}
    render={(props)=>{
        sessionStorage.getItem('email') === null?(
            // <Cmp {...props}/>
            <Redirect 
            to="Home/Login"
            />
        ):
        <Redirect 
        to="Home/Login"
        />
    }}

    />

};


export default Protected;