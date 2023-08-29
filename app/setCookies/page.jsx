"use client"
import Cookies from "js-cookie";


const setCookies = () => {
    const handleSetCookie = () => {
      Cookies.set('theme', 'dark', { expires: 7 }); 
    };
  
    return (
      <div className="m-6">
        <button className="p-3 bg-orange-300 text-white" onClick={handleSetCookie}>Set Cookie</button>
        
      </div>
    );
  };
  
  export default setCookies;