

const Form = (props) => {
    const{setContent} = props
    const handleAdd = (e) => {
        e.preventDefault()
        setContent(e.target.input.value)
        console.log(e.target.input.value)
        e.target.input.value = ""

    }
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" name = "input" ></input>
                <input type="submit" value ="Add"></input>
            </form>
        </div>
    )
}
export default Form