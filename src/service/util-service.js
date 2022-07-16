export const utilService = {
    makeTheaterSection,
    getDefaultTheater
}

function getDefaultTheater() {
    return [
        {name: 'right', seats: utilService.makeTheaterSection(49, 'r')},
        {name: 'center', seats: utilService.makeTheaterSection(72, 'c')},
        {name: 'left', seats: utilService.makeTheaterSection(36, 'l')}        
    ]
}
  
function makeTheaterSection(amount, section) {
    let theaterSection = []
    for (let i = 1; i < amount+1; i++) {
        theaterSection.push(
            {
                _id: `${section}${i}`,
                isBooked: false,
                isSelected: false,
                price: (section === 'L' || section === 'R')? 20 : 30
            }
        )
    }
    return theaterSection
}