import React, {useEffect, useState} from "react";
import axios from "axios";



function Body() {

    const [items, setitems] = useState([])

    useEffect(() => {
        
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian").then((res) => {
            console.log(res.data.meals);
            setitems(res.data.meals)
        }).catch((err) => {
            console.log(err);
        });

    }, [])


    const itemslist = items.map((obj) =>{
        return <div className="col-md-3 shadow p-3 mb-5 bg-white rounded" >
            <p className="title">{obj.strMeal}</p>
            <img src={obj.strMealThumb} alt="" className="img-fluid" />
            <p className="id">{obj.idMeal}</p>
        </div>
    })

    return (
        <div>
            {/* <div className="container"> */}
                <div className="row justify-content-center" style={{marginBottom: "60px", marginTop: "50px"}}>
                    {itemslist}
                </div>
            {/* </div> */}
        </div>
    )
}



export default Body;