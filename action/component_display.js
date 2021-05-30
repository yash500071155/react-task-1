import React from 'react'
import {useSelector} from 'react-redux'
export const Display = () =>{

    const counter = useSelector(state => state.counter);
    
    const createCard = () => {
        return(
            <div
                style={{
                    height:'30%',
                    width: '30%',
                    backgroundColor: "lightblue",
                    boxShadow: '5px 5px gray',
                    borderRadius: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <p style={{fontFamily:'Times New Roman, Times, serif', fontSize:'100px'}}>{counter}</p>
            </div>
        )
    }

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:'100vh'
        }}>
            {createCard()}
        </div>

    );

}
