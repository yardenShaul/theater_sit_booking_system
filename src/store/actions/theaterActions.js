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