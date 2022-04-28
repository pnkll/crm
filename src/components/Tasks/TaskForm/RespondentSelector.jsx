import { useSelector } from "react-redux"
import { getUserList } from "../../../redux/selectors/users-selectors"

const RespondentSelector = (props) => {

    const users = useSelector(getUserList)

    const respondents = users.map(el => <option value={el._id}>{el.info.firstName} {el.info.lastName}</option>)

    return <>
        <select onChange={props.handleChange}>
            {respondents}
        </select>
    </>
}

export default RespondentSelector