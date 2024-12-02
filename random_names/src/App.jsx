import Title from "./components/title/Title"
import Button from "./components/button/Button"
import Form_genere from "./components/form_sex/Form_genere"
import Form_race from "./components/form_race/Form_race"

function generateName() {
  let new_name = ""
  
  let consonant = "bcdfghjklmnpqrstvwxyz"
  let vowels = "aeiou"
  
  let r_num_letters = Math.floor(Math.random() * (10 - 4)) + 4
  let first_is_vowel = Boolean(Math.floor(Math.random() * 2))

  if(first_is_vowel == true) {
      new_name = vowels[Math.floor(Math.random() * 5)].toUpperCase()

      for(let i = 1; i < r_num_letters; i++) {
          if(i % 2 == 0) {
              new_name += vowels[Math.floor(Math.random() * 5)]
          } else {
              new_name += consonant[Math.floor(Math.random() * 21)]
          }
      }
  }else {
      new_name = consonant[Math.floor(Math.random() * 21)].toUpperCase()

      for(let i = 0; i < r_num_letters; i++) {
          if(i % 2 != 0) {
              new_name += consonant[Math.floor(Math.random() * 21)]
          } else {
              new_name += vowels[Math.floor(Math.random() * 5)]
          }
      }
  }

  return new_name
}

function App() {
  return (
    <main>
      <article>
        <Title text_title={"Random Names"}/>
        <Button text_btn={"Gerar nome"} func_actived={generateName}/>
      </article>
      
      <article>
        <Title text_title={"Random names with Filter"}/>
        <Form_genere/>
      </article>

      <article>
        <Title text_title={"Random names per race"}/>
        <Form_race/>
      </article>
    </main>
  )
}

export default App