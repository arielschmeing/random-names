import { useRef } from "react"
import Names from "../../json/names.json"
import Button from "../button/Button"
import Label_form from "../label_form/Label_form"

function Form_race() {
    const name_type = "name_race"
    const name_sex = "name_sex"

    const i_man = useRef()
    const i_woman = useRef()

    const i_elf = useRef()
    const i_orc = useRef()
    const i_tiefling = useRef()
    const i_dwarf = useRef()

    function checkmark_race_filter() {
        if(i_elf.current.checked) {
            let r_number = Math.floor(Math.random() * 49)
            
            if(i_man.current.checked) {
                return Names.elf_names.man[r_number]
            }else if(i_woman.current.checked){
                return Names.elf_names.woman[r_number]
            }
        }

        if(i_orc.current.checked) {
            if(i_man.current.checked) {
                let r_number = Math.floor(Math.random() * 66)
                return Names.orc_names.man[r_number]
            }else if (i_woman.current.checked){
                let r_number = Math.floor(Math.random() * 75)
                return Names.orc_names.woman[r_number]
            }
        }

        if(i_tiefling.current.checked) {
            let r_number = Math.floor(Math.random() * 24)

            if(i_man.current.checked) {
                return Names.tiefling_names.man[r_number]
            }else if (i_woman.current.checked){
                return Names.tiefling_names.woman[r_number]
            }
        }

        if(i_dwarf.current.checked) {
            if(i_man.current.checked) {
                let r_number = Math.floor(Math.random() * 56)
                return Names.dwarf_names.man[r_number]
            }else if(i_woman.current.checked) {
                let r_number = Math.floor(Math.random() * 41)
                return Names.dwarf_names.woman[r_number]
            }
        }
    }
    
    return (
        <div>
            <form action="">
                <Button text_btn={"Gerar nome"} func_actived={checkmark_race_filter}/>

                <Label_form input_ref={i_elf} name={name_type} id={"elf"} value={"Elfo"} s_text={"Elfo"}/>

                <Label_form input_ref={i_orc} name={name_type} id={"orc"} value={"Orc"} s_text={"Orc"}/>

                <Label_form input_ref={i_tiefling} name={name_type} id={"tiefling"} value={"Tiefling"} s_text={"Tiefling"}/>

                <Label_form input_ref={i_dwarf} name={name_type} id={"dwarf"} value={"Anão"} s_text={"Anão"}/>

                <div>
                    <Label_form input_ref={i_man} name={name_sex} id={"man"} value={"Homem"} s_text={"Homem"}/>

                    <Label_form input_ref={i_woman} name={name_sex} id={"woman"} value={"Mulher"} s_text={"Mulher"}/>
                </div>
            </form>
        </div>
    )
}

export default Form_race