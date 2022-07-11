export function SeatPreview({seat}) {
    return <div className="seat-preview-main-container">
        {(seat.isBooked) ? <img src="seat-reserved.png" alt="" /> : <img src="seat-avalible.png" alt="" />}
    </div>
}