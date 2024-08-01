import React from "react";

function Header({onDarkModeClick, isDark}){
return(
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {isDark ? "Light Mode": "Dark Mode"}
        </button>
    </header>
)
}
export default Header