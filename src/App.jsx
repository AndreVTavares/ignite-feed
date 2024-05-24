import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AndreVTavares.png",
      name: "André Tavares",
      role: "Full Stack Developer",
    },
    cotent: [
      {
        type: "pharagraph",
        conent: "Fala galeraa 👋",
      },
      {
        type: "pharagraph",
        conent:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        conent: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-24 10:14:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO da Rocket",
    },
    cotent: [
      {
        type: "pharagraph",
        conent: "Fala galeraa 👋",
      },
      {
        type: "pharagraph",
        conent:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        conent: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-22 20:22:00"),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.cotent}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
