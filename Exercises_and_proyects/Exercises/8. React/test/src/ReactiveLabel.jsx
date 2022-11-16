//REMEMBER rsf and rsc snippet
import React, { useState } from "react";

function ReactiveLabel() {
    //Use os useState
    const [isStrike, setIsStrike] = useState(true);
    const [itemCount,setItemCount] = useState(0);

    function setStrike(val){
        setIsStrike(val);
    };

    return(
      <div>
          <p style={isStrike ? {textDecoration: "line-through"} : null}
          onClick={e=>{
              setStrike(!isStrike);
          }}>
              Buy {itemCount} cartons of milk
          </p>
          <button onClick={ ()=>{setItemCount(itemCount + 1)} }>+</button>
          <button onClick={ ()=>{if(itemCount>0) {setItemCount(itemCount - 1)} } }>-</button>
      </div>
    );
}

export default ReactiveLabel;