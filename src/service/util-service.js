export const utilService = {
    makeTheaterSection,
    getDefaultTheater
}

function getDefaultTheater() {
    return [
        utilService.makeTheaterSection(49, 'R'),
        utilService.makeTheaterSection(72, 'C'),
        utilService.makeTheaterSection(36, 'L')
    ]
}
  
function makeTheaterSection(amount, section) {
    let theaterSection = []
    for (let i = 1; i < amount+1; i++) {
        newArr.push(
            {
                _id: `${section}${i}`,
                isBooked: false,
                isSelected: false,
                price: (section === 'l' || section === 'r')? 20 : 30
            }
        )
    }
    return theaterSection
}