import { useEffect, useState } from "react";

let CurrenTime=()=>{
    const [time ,setTime]=useState(new Date());

    useEffect(()=>{
        console.log("Interval is to be passed");
        const intervalId= setInterval (()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
            console.log("Interval has been set");
        };

    },[]);
    

    return <div className="text1"><p>This is the current time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</p> </div>;
};

export default CurrenTime;