import { storageService } from "./async-storage.service";
const STORAGE_KEY = 'theater_DB'

export const theaterService = {
    query,
    getById,
    save,
    remove,
}

async function query() {
    return await storageService.query(STORAGE_KEY) 
}

async function getById(seatId) {
    return await storageService.get(STORAGE_KEY, seatId)
}

async function remove(seatId) {
    await storageService.remove(STORAGE_KEY, seatId)
    return storageService.query(STORAGE_KEY)
}

async function save(seat) {
    let savedSeat
    if (seat._id) {
        savedSeat = await storageService.put(STORAGE_KEY, seat)
    } else {
      savedSeat = await storageService.post(STORAGE_KEY, seat)
    }
    return savedSeat
}

