import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielrportugal.png',
      name: 'Gabriel Rocha Portugal',
      role: 'Backend Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: 'jane.design/portuga' },
    ],
    publishedAt: new Date('2024-01-18 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/geosordi.png',
      name: 'Geovani Sordi',
      role: 'Backend Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Eai galera, de boa?' },
      { id: 2, type: 'paragraph', content: 'Um salve do mano Geovani p vocês! Vamo q vamo!' },
      { id: 3, type: 'link', content: 'design/geovani' },
    ],
    publishedAt: new Date('2024-01-19 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {posts.map((post) => {
          return (
            <Post
              post={post}
            />
          )
         })}
        </main>
      </div>
    </div>
  )
}
