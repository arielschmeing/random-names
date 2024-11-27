import "./name_space.css"
import Copy_button from "../copy_button/Copy_button"

// eslint-disable-next-line react/prop-types
function Name_space( {name_in_space} ) {
    return (
        <div>
            <div id="text_background">
                <p id="text_value">{name_in_space}</p>
            </div>
            <Copy_button text_to_copy={name_in_space}/>
        </div>
    )
}

export default Name_space