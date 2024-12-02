import "./label_form.css"

// eslint-disable-next-line react/prop-types
function Label_form( {input_ref, name, id, value, s_text} ) {
    return (
        <label htmlFor="unissex" className="checkmark_container">
            <input 
                ref={input_ref}
                type={"radio"}
                name={name}
                id={id}
                className={"checkmark"}
                value={value}/>
            <span>{s_text}</span>
        </label>
    )
}

export default Label_form