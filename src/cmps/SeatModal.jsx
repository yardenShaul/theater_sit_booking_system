export function SeatModal({ seat, onCloseModal, onBookSeat }) {

    return <div className="seat-modal-main-container">
        <button className="seat-modal-exit-button" onClick={() => { onCloseModal() }} >X</button>
        <h2>{seat._id}</h2>
        {(seat.isBooked) ? <img src="seat-reserved.png" alt="" /> : <img src="seat-avalible.png" alt="" />}
        <button onClick={() => {onBookSeat(seat._id)}}>Book this seat!</button>
    </div>
}