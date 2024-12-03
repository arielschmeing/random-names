import { useRef } from "react"
import Label from "../../js/label"
import Button from "../button/Button"
import Names from "../../json/names.json"
import Label_form from "../label_form/Label_form"

function Form_genere() {

    const label_man = new Label(useRef(), "name_sex", "man", "Man")
    const label_woman = new Label(useRef(), "name_sex", "woman", "Woman")
    const label_unissex = new Label(useRef(), "name_sex", "unissex", "Unissex")

    function handler_genere_filter() {
        if(label_man.input_ref.current.checked) {

            let r_number = Math.floor(Math.random() * 211)
            return Names.man_names[r_number]

        }else if(label_woman.input_ref.current.checked) {
            
            let r_number = Math.floor(Math.random() * 91)
            return Names.woman_names[r_number]

        }else if(label_unissex.input_ref.current.checked) {
            
            let r_number = Math.floor(Math.random() * 55)
            return Names.unissex_names[r_number]

        }
    }

    return (
        <div>
            <form action="">
                <Button text_btn={"Gerar nome"} func_actived={handler_genere_filter}/>

                <Label_form {...label_man}/>
                <Label_form {...label_woman}/>
                <Label_form {...label_unissex}/>
            </form>
        </div>
    )
}

export default Form_genere