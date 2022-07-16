import { storageService } from "./async-storage.service";
const STORAGE_KEY = 'theater_DB'

export const theaterService = {
    query,
    bookSeat
}

async function query() {
    return await storageService.query(STORAGE_KEY) 
}

async function bookSeat(seatId) {
    const theater = await query()
    let updatedTheater = JSON.parse(JSON.stringify(theater))
    const sectionIdx = theater.findIndex(section => section.name[0] === seatId[0])
    const seatIdx = theater[sectionIdx].seats.findIndex(seat => seat._id === seatId)
    let updatedSection = updatedTheater[sectionIdx]
    let updatedSeat = updatedSection.seats[seatIdx]
    updatedSeat = {...updatedSeat, isBooked: true}
    updatedSection.seats.splice(seatIdx, 1, updatedSeat)
    updatedTheater.splice(sectionIdx, 1, updatedSection)
    return await _save(updatedTheater)
}

async function _save(theater) {
    return await storageService.put(STORAGE_KEY, theater)
}

