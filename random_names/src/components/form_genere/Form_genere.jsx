import { useRef } from "react"
import Button from "../button/Button"
import Names from "../../json/names.json"
import Label_form from "../label_form/Label_form"

function Form_genere() {
    const name_type = "name_sex"

    const i_man = useRef()
    const i_woman = useRef()
    const i_unissex = useRef()

    function checkmark_func() {
        if(i_man.current.checked == true) {

            let r_number = Math.floor(Math.random() * 211)
            return Names.man_names[r_number]

        }else if(i_woman.current.checked == true) {
            
            let r_number = Math.floor(Math.random() * 91)
            return Names.woman_names[r_number]

        }else if(i_unissex.current.checked == true) {
            
            let r_number = Math.floor(Math.random() * 55)
            return Names.unissex_names[r_number]

        }
    }

    return (
        <div>
            <form action="">
                <Button text_btn={"Gerar nome"} func_actived={checkmark_func}/>

                <Label_form input_ref={i_man} name={name_type} id={"man"} value={"Homem"} s_text={"Homem"}/>

                <Label_form input_ref={i_woman} name={name_type} id={"woman"} value={"Mulher"} s_text={"Mulher"}/>

                <Label_form input_ref={i_unissex} name={name_type} id={"unissex"} value={"Unissex"} s_text={"Unissex"}/>
            </form>
        </div>
    )
}

export default Form_genere