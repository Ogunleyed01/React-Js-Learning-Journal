const Input = ({colorValue, setColorValue}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color Value:</label>
            <input 
                autoFocus
                required
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
                type="text" 
                name="color" 
                id="color" 
                placeholder="Add Color Name"
            />
        </form>
    )
}

export default Input