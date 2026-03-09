'use client'

import { useState } from 'react'

export default function AddMetricsPage() {

  const [followers, setFollowers] = useState('')
  const [reach, setReach] = useState('')
  const [likes, setLikes] = useState('')
  const [comments, setComments] = useState('')
  const [posts, setPosts] = useState('')

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    await fetch('/api/metrics', {
      method: 'POST',
      body: JSON.stringify({
        followers,
        reach,
        likes,
        comments,
        posts
      })
    })

    alert("Métricas guardadas")
  }

  return (
    <div style={{ padding:40 }}>

      <h1>Añadir métricas mensuales</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Followers"
          value={followers}
          onChange={(e)=>setFollowers(e.target.value)}
        />

        <br/>

        <input
          placeholder="Reach"
          value={reach}
          onChange={(e)=>setReach(e.target.value)}
        />

        <br/>

        <input
          placeholder="Likes"
          value={likes}
          onChange={(e)=>setLikes(e.target.value)}
        />

        <br/>

        <input
          placeholder="Comments"
          value={comments}
          onChange={(e)=>setComments(e.target.value)}
        />

        <br/>

        <input
          placeholder="Posts"
          value={posts}
          onChange={(e)=>setPosts(e.target.value)}
        />

        <br/><br/>

        <button type="submit">
          Guardar métricas
        </button>

      </form>

    </div>
  )
}