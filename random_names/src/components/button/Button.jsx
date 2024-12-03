import "./button.css"
import { useState } from "react"
import Name_space from "../name_space/Name_space"

// eslint-disable-next-line react/prop-types
function Button({ text_btn, func_actived }) {
    const [name, setName] = useState("None...")

    return (
        <div>
            <input type="button" value={text_btn} onClick={() => setName(func_actived())}/>
            <Name_space name_in_space = {name}/>
        </div>
    )
}

export default Button