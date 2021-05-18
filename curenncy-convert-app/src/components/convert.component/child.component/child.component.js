import React from "react";
import switchLogo from "..//..//..//assets/images/switch.png";
import dataBase from "./currency.json";





const ConvertVal =(props)=>{

    console.log(props);

    const selectVal = React.createRef();
    const fromVal = React.createRef();

    // dataBase.forEach(item=>{
    //   console.log(item);
    // })
    const outputRef = React.createRef();
    console.log(outputRef);
    
    const exchange =()=>{
        let from = dataBase
                  .find(element=>element.code===selectVal.current.value);
        let to = dataBase
                  .find(element=>element.code===outputRef.current.value);
        document.getElementById("result")
                  .innerText = ((fromVal.current.value*from.value)/to.value).toFixed(3);
    }

  return (
    <div className="content">
      <div className="row">
        <div className="col-12">
          <div className="form">
            <form>
                <label id="error">From</label>
                <input type="number" ref={fromVal} name="fromVal"/>
                <select ref={selectVal}>
                  {dataBase.map(currency=><option>{currency.code}</option>)}
                </select>
            </form>
          </div>
        </div>
        <div className="col-12 mt-5 mb-5">
          <div>
            <figure>
                <img src={switchLogo} className="switchLogo" /> 
            </figure>
          </div>
        </div>
        <div className="col-12">
          <div className="to-convert">
              <label>To</label>
              <span id="result"></span>
              <select id="to" ref={outputRef}>
              {dataBase.map(currency=><option>{currency.code}</option>)}
              </select>
          </div>
          <button type="button" className="btn btn-primary submitBtn" onClick={exchange}><em>Exchange</em></button>
        </div>
      </div>




      
    </div>
  );
}

export default ConvertVal;