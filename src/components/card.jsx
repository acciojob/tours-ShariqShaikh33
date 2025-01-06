import React from "react";
import "../styles/card.css";



const Card=(props)=>{
    let isopen=false
    const expand=(id,)=>{
        const element = document.getElementById(id);
        if(!isopen){
            element.style.height="100%";
            isopen=true;
        }
        else if(isopen){
            element.style.height="100px";
            isopen=false;
        }
    }

    const deletetour=(id)=>{
        document.getElementById(id).remove();
    }

    return(
        <div id={props.id+"main"} className="mainDiv">
            <img className="cardImage" src={props.image}></img>
            <div className="cardDetails">
                <p className="cardName">{props.name}</p>
                <p className="cardPrice">{props.price}</p>
            </div>
            <div id={props.id+"info"} className="cardDescription">
                <p className="cardinfo">{props.info}</p>
                
            </div>
            <button className="cardReadMore" id={props.id+"btn"} onClick={()=>expand(props.id+"info")}>Read more</button>
            <button id={"delete-btn-"+props.id} onClick={() => deletetour(`${props.id}`+"main")}>Delete</button>
        </div>
    )
}

export default Card;