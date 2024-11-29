import "./button.css"
import { useState } from "react"
import Name_space from "../name_space/Name_space"

// function generateName() {
//     let new_name = ""
    
//     let consonant = "bcdfghjklmnpqrstvwxyz"
//     let vowels = "aeiou"
    
//     let r_num_letters = Math.floor(Math.random() * (10 - 4)) + 4
//     let first_is_vowel = Boolean(Math.floor(Math.random() * 2))

//     if(first_is_vowel == true) {
//         new_name = vowels[Math.floor(Math.random() * 5)].toUpperCase()

//         for(let i = 1; i < r_num_letters; i++) {
//             if(i % 2 == 0) {
//                 new_name += vowels[Math.floor(Math.random() * 5)]
//             } else {
//                 new_name += consonant[Math.floor(Math.random() * 21)]
//             }
//         }
//     }else {
//         new_name = consonant[Math.floor(Math.random() * 21)].toUpperCase()

//         for(let i = 0; i < r_num_letters; i++) {
//             if(i % 2 != 0) {
//                 new_name += consonant[Math.floor(Math.random() * 21)]
//             } else {
//                 new_name += vowels[Math.floor(Math.random() * 5)]
//             }
//         }
//     }

//     return new_name
// }

// eslint-disable-next-line react/prop-types
function Button({ text_btn, func_actived }) {
    const [name, setName] = useState("None...")

    return (
        <div>
            <input type="button" value={text_btn} onClick={() => setName(func_actived())}/>
            <Name_space name_in_space = {name}/>
        </div>
    )
}

export default Button