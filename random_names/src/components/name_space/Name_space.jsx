import "./name_space.css"

// eslint-disable-next-line react/prop-types
function Name_space( {name_in_space} ) {
    return (
        <div>
            <div id="text_background">
                <p id="text_value">{name_in_space}</p>
            </div>
        </div>
    )
}

export default Name_space