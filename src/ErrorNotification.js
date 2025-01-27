import React from "react";

function ErrorNotification()
{
    return(
        <div id="notification" className="flex justify-center items-center w-max h-16 p-4 
        bg-gradient-to-br from-red-400 to-red-600 shadow-md text-white rounded-md
        fixed right-5 bottom-5 z-10 opacity-0 transition-all duration-200">
            Input Box Cannot Be Empty or Credits Cannot be less than 1!
        </div>
    );
}



export default ErrorNotification;