import { useRef } from "react"
import Label from "../../js/label"
import Button from "../button/Button"
import Names from "../../json/names.json"
import Label_form from "../label_form/Label_form"

function Form_race() {
    
    const label_man = new Label(useRef(), "name_sex", "man", "Homem")
    const label_woman = new Label(useRef(), "name_sex", "woman", "Woman")

    const label_elf = new Label(useRef(), "name_race", "elf", "Elfo")
    const label_orc = new Label(useRef(), "name_race", "orc", "Orc")
    const label_tiefling = new Label(useRef(), "name_race", "tiefling", "Tiefling")
    const label_dwarf = new Label(useRef(), "name_race", "dwarf", "Dwarf")

    function handler_race_filter() {
        if(label_elf.input_ref.current.checked) {
            let r_number = Math.floor(Math.random() * 49)
            
            if(label_man.input_ref.current.checked) {
                return Names.elf_names.man[r_number]
            }else if(label_woman.input_ref.current.checked){
                return Names.elf_names.woman[r_number]
            }
        }

        if(label_orc.input_ref.current.checked) {
            if(label_man.input_ref.current.checked) {
                let r_number = Math.floor(Math.random() * 66)
                return Names.orc_names.man[r_number]
            }else if (label_woman.input_ref.current.checked){
                let r_number = Math.floor(Math.random() * 75)
                return Names.orc_names.woman[r_number]
            }
        }

        if(label_tiefling.input_ref.current.checked) {
            let r_number = Math.floor(Math.random() * 24)

            if(label_man.input_ref.current.checked) {
                return Names.tiefling_names.man[r_number]
            }else if (label_woman.input_ref.current.checked){
                return Names.tiefling_names.woman[r_number]
            }
        }

        if(label_dwarf.input_ref.current.checked) {
            if(label_man.input_ref.current.checked) {
                let r_number = Math.floor(Math.random() * 56)
                return Names.dwarf_names.man[r_number]
            }else if(label_woman.input_ref.current.checked) {
                let r_number = Math.floor(Math.random() * 41)
                return Names.dwarf_names.woman[r_number]
            }
        }
    }

    return (
        <div>
            <form action="">
                <Button text_btn={"Gerar nome"} func_actived={handler_race_filter}/>

                <Label_form {...label_elf}/>
                <Label_form {...label_orc}/>
                <Label_form {...label_tiefling}/>
                <Label_form {...label_dwarf}/>

                <div>
                    <Label_form {...label_man}/>
                    <Label_form {...label_woman}/>
                </div>
            </form>
        </div>
    )
}

export default Form_race