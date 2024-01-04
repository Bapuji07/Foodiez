import React from "react";
 
const RestaurantOffer=()=>{
    return(
        <>
        <h1>offer near me</h1>
        </>
    )
}
class Offer extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("Api calls")
    }
    render(){
        return(
            <>
            <h1>Offer</h1>
            </>
        )
    }

}
const offer=()=>{
    return(
        <>

        </>
    )
}

export default RestaurantOffer;