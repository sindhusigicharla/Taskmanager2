import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

function Hello(){

    const themecontext = useContext(ThemeContext);
    console.log(themecontext, 'themecontext inside the Hello')
    return <h1>Hello</h1>
}

export default Hello;