import { useState, useEffect } from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

import { fetchPosts as fetchPostsApi } from './api/posts'

const App = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPostsApi()
        console.log('Fetched data:', data)
        setPosts(Array.isArray(data) ? data : [])
      } catch (err) {
        if (err?.response) {
          console.error('Error fetching posts:', err.response.status, err.response.data)
        } else {
          console.error('Error fetching posts:', err?.message || err)
        }
        setPosts([])
      }
    }
    loadPosts()
  }, [])

  useEffect(() =>  {
    const term = (search || '').toLowerCase()

    const filteredResults = (posts || []).filter(post => {
      const body = (post?.body || '').toLowerCase()
      const title = (post?.title || '').toLowerCase()
      return body.includes(term) || title.includes(term)
    })

    
    setSearchResults(filteredResults.slice().reverse())
  }, [posts, search])

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    setPosts(prev => [...prev, newPost])
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="My Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
