import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
export const Incbutton = () => {
    const dispatch = useDispatch();

    const incbutton = () => {
        dispatch( {type: 'increment'});
    }
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'10vh',
                    borderRadius: '15px',
                    alignItems: 'center'
        }}>
            <Button variant={"secondary"} onClick={incbutton}>Click Me</Button>
        </div>

    );
}
