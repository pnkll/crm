import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './redux/reducers/auth-reducer';
import { getName } from './redux/selectors/auth-selectors';

function App() {


  const dispatch = useDispatch()

  const name = useSelector( getName)

  const data = {
    isAuth: true,
    userId: Date.now(),
    name: 'Painkill',
    group: 'admin'
  }


  const onSend = async () => {
    dispatch(setAuth(data))
  }


  return (
    <>
      <button onClick={onSend}>Запрос</button>
      {name !=null && <div>Привет {name}</div>}
    </>
  );
}

export default App;
