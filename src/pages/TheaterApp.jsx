import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SeatList } from '../cmps/SeatList'
import { loadTheater } from '../store/actions/theaterActions'

export function TheaterApp() {
    const { theater } = useSelector((storeState) => storeState.theaterModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTheater())
    },[])

    if (!theater) return (<div><h2>Loading...</h2></div>)

    return ( <div className="theater-app-main-container">
        <div className="main-theater">
            {theater.map(section => {
                return <SeatList section={section} />
            })}
        </div>
    </div>
    )
}