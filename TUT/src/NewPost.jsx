function NewPost({handleSubmit, postTitle, setPostTitle, postBody, setPostBody}) {
    return (
        <main className="NewPost">
            <h1> New Post</h1>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="PostTitle">Title:</label>
                <input 
                    type="text" 
                    id="postTitle"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="PostBody">Post:</label>
                <textarea 
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    id="postBody"
                />
                <button type="submit" >Submit</button>
            </form>
        </main>
    )
}

export default NewPost