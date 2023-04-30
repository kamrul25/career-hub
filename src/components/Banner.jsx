import React from 'react';


const styles = {
    background :{
        backgroundImage:` url("../assets/All Images/Vector.png"), url("../assets/All Images/Vector-1.png")`,
        backgroundPosition: "left bottom, right top",
    }
}
const Banner = ({children}) => {
    return ( 
        <div style={styles.background} className="bg-no-repeat bg-auto w-full h-auto absolute top-0 left-0 bg-gradient-to-l from-[#7E90FE] to-[#9873FF]">
            {children}
        </div>
     ) ;
};

export default Banner;