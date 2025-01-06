import React from "react";
import "../styles/card.css";



const Card=(props)=>{
    let isopen=false
    const expand=(id,)=>{
        const element = document.getElementById(id);
        if(!isopen){
            document.getElementById("see-more-"+`${props.id}`).innerHTML="See less";
            element.innerHTML = `${props.info}`;
            element.style.height="100%";
            isopen=true;
        }
        else if(isopen){
            document.getElementById("see-more-"+`${props.id}`).innerHTML="See more";
            element.innerHTML = `${props.info.substring(0,200)}`
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
                <p id={"tour-item-para-"+props.id} className="cardinfo">   {props.info.substring(0,200)} </p>
                
            </div>
            <button className="cardReadMore" id={"see-more-"+`${props.id}`} onClick={()=>expand(props.id+"info")}>See more</button>
            <button id={"delete-btn-"+props.id} onClick={() => deletetour(`${props.id}`+"main")}>Delete</button>
        </div>
    )
}

export default Card;