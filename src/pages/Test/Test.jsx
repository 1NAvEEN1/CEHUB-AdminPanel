import React, { useEffect } from 'react'
import { showLoadingAnimation } from '../../app/loadingAnimationController';
import { showAlertMessage } from '../../app/alertMessageController';



const Test = () => {

    //showLoadingAnimation({ message: "Loading something..." });
        
     // changeMessage({ message: "Loading something..." });
    // hideLoadingAnimation();

    // showAlertMessage({
    //     message: "Login successful",
    //     type: "success",
    //   });

    const test = async () => {
        console.log("test");

      //  const response = await StudentService.userLogin(user, pwd);

     //   showLoadingAnimation({ message: "Loading something..." });

    //     showAlertMessage({
    //     message: "Login successful",
    //     type: "success",
    //   });

    }

 


  return (
    <div>
        <button  onClick={()=>{test()}} >Primary</button>


    </div>
  )
}

export default Test
