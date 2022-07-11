import { SeatPreview } from "./SeatPreview";

export function SeatList({section}) {

    const getGridTamplate = () => {
        switch (section.length) {
            case 49:
                return 'right-section'
            case 72:
                return 'middle-section'
            case 36:
                return 'left-section'
        }
    }

    return (<div className="seat-list-main-container">
        <div className={'main-section ' + getGridTamplate()}>
            {section.map(seat => {
                return <SeatPreview seat={seat}/>
            })}
        </div>
    </div>)
}