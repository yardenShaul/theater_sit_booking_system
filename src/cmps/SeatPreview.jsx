import { useState } from "react"
import { SeatModal } from "./SeatModal"

export function SeatPreview({seat, onBookSeat}) {

    const [isModal, setIsModal] = useState(false)

    const onCloseModal = () => {
        setIsModal(!isModal)
    }

    return <div className="seat-preview-main-container" onClick={() => {setIsModal(!isModal)}}
    title={`${(seat.isBooked) ? 'Reserved seat' : 'Avalible seat! Click to order'}`} >
        {<img src={`seat-${(seat.isBooked) ? 'reserved' : 'avalible'}.png`} alt="" />}
        {isModal && <SeatModal seat={seat} onCloseModal={onCloseModal} onBookSeat={onBookSeat}/>}
    </div>
}