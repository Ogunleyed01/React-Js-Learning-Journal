const ColorBox = ({colorValue}) => {
    return (
        <section id="colorBox"style={{backgroundColor: colorValue}} >
            <p>{colorValue ? colorValue : 'Empty Color Value'}</p>
        </section>
    )
}

export default ColorBox