import "./form.css"
import { useRef } from "react"
import Button from "../button/Button"
import Names from "../../json/names.json"

function Form() {
    const i_man = useRef()
    const i_woman = useRef()
    const i_unissex = useRef()

    function checkmark_func() {
        if(i_man.current.checked == true) {

            let r_number = Math.floor(Math.random() * 211)
            return Names.man_names[r_number]

        }else if(i_woman.current.checked == true) {
            
            let r_number = Math.floor(Math.random() * 91)
            return Names.man_names[r_number]

        }else if(i_unissex.current.checked == true) {
            
            let r_number = Math.floor(Math.random() * 55)
            return Names.man_names[r_number]

        }
    }

    return (
        <div>
            <form action="">
                <Button text_btn={"Gerar nome"} func_actived={checkmark_func}/>

                <label htmlFor="man" className="checkmark_container">
                    <input
                        ref={i_man}
                        type="radio" 
                        name="name_sex" 
                        id="man" 
                        className="checkmark" 
                        value="Homem"/>
                    <span>Homem</span>
                </label>

                <label htmlFor="woman" className="checkmark_container">
                    <input 
                        ref={i_woman}
                        type="radio" 
                        name="name_sex" 
                        id="woman" 
                        className="checkmark" 
                        value="Mulher"/>
                    <span>Mulher</span>
                </label>

                <label htmlFor="unissex" className="checkmark_container">
                    <input 
                        ref={i_unissex}
                        type="radio" 
                        name="name_sex" 
                        id="unissex" 
                        className="checkmark" 
                        value="Unissex"/>
                    <span>Unissex</span>
                </label>
            </form>
        </div>
    )
}

export default Form