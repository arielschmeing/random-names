import Title from "./components/title/Title"
import Button from "./components/button/Button"

function App() {
  return (
    <main>
      <article>
        <Title text_title={"Random Names"}/>
        <Button text_btn={"Gerar nome"}/>
      </article>
      <article>
        <Title text_title={"Random names with Filter"}/>
        <Button text_btn={"Gerar nome"}/>
      </article>
    </main>
  )
}

export default App