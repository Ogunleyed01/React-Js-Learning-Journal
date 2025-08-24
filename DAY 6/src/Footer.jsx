const Footer = ({length}) => {
    
    return (
        <footer>
           <p>{length} grocery {length === 1 ? 'item' : 'items'} </p>
        </footer>
    )
}

export default Footer