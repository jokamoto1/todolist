
const Display = (props) => {
    const { content } = props
    const { deleteContent } = props
    return (
        <div>
            <div>
                {content.map((content) =>
                    <div key ={content}>
                        {content}
                        <input type="checkbox"></input>
                        <input onClick={() => deleteContent(content)} type="submit" value="delete"></input>
                    </div>
                )}
            </div>
        </div>

    )
}
export default Display
