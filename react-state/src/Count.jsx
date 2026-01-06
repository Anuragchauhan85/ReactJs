import { useState,useEffect } from "react";

export default function count() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let inCountx = () => {
        setCountx((currCount) => currCount + 1);
    };

    let inCounty = () => {
      setCounty((currCount) => currCount + 1);
    };

    useEffect(function printSomething() {
        console.log("this is useEffect");
    },[countx]);

    return (
      <div>
        <h3>count={countx}</h3>
        <button onClick={inCountx}>+1</button>
        <h3>count={county}</h3>
        <button onClick={inCounty}>+1</button>
      </div>
    );
}