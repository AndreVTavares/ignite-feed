import { Post } from "./Post"
import { Header } from "./components/Header"

import "./styles.css"

export function App() {
  return (
    <>
      <Header />
      <Post author="André" content="teste de conteudo" />
      <Post author={"André Tavares"} content={"teste de conteudo 2"} />
      <Post />
    </>
  )
}
