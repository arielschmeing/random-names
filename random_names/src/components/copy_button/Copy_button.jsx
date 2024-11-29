import "./copy_button.css"
import path_copy_icon from "../../assets/imgs/copy_icon.png"

// eslint-disable-next-line react/prop-types
function Copy_button({text_to_copy}) {
    return (
        <div>
            <input type="image" src={path_copy_icon} id="copy_button" onClick={() => {navigator.clipboard.writeText(text_to_copy); alert("Copiado!")}}/>
        </div>
    )
}

export default Copy_button