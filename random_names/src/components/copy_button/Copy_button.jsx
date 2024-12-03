import "./copy_button.css"
import { useEffect, useState } from "react"
import path_copy_icon from "../../assets/imgs/copy_icon.png"
import Notification from "../notification/Notification"

// eslint-disable-next-line react/prop-types
function Copy_button({text_to_copy}) {
    const [hasClick, setHasClick] = useState(false)

    function handlerCopyText() {
        navigator.clipboard.writeText(text_to_copy)
        setHasClick(true)
    }
    
    useEffect(() => {
        setTimeout(() => {
            setHasClick(false)
        }, 2 * 1000)
    }, [hasClick])

    return (
        <div>
            <input type="image" src={path_copy_icon} id="copy_button" onClick={() => handlerCopyText()}/>
            {hasClick && (
                <Notification text={"Texto copiado!"}/>
            )}
        </div>
    )
}

export default Copy_button