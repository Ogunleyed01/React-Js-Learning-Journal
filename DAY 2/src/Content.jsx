const Content = () => {
    const nameChangeHandler = () => {
        
        const name = ['E-Dave','Temiloluwa', 'Tomiwa']
        const int = Math.floor(Math.random *3)
        return name[int]
    }
    return (
        <main>
            <p>What's Up {nameChangeHandler()} ?</p>
        </main>
    )
}

export default Content