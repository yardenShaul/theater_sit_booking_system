import { theaterService } from '../../service/theater-service.js'

export function loadTheater() {
    return async (dispatch) => {
        try {
            const theater = await theaterService.query()
            dispatch({type: 'SET_THATER', theater})
        } catch (err) {
            console.log('eror: ', err)
        }
    }
}

export function bookSeat(seatId) {
    return async (dispatch) => {
        try {
            const theater = await theaterService.bookSeat(seatId)
            dispatch({type: 'SET_THATER', theater})
        } catch (err) {
            console.log('eror: ', err)
        }
    }
}