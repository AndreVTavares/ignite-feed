import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="André" content="teste de conteudo" />
          <Post author={"André Tavares"} content={"teste de conteudo 2"} />
          <Post />
        </main>
      </div>
    </>
  )
}
