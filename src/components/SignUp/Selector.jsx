export const Selector = (props) => {
    
    const {array, handleChange} = props

    const total = array.map( el => <option key={el.id} value={el.id}>{el.name}</option>)

    console.log(array)

    return <>
    <select onChange={handleChange}>
        {total}
    </select>
    
    </>
}
