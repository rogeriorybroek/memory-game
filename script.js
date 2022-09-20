const squares = document.querySelectorAll('.tile')
const numerOfSquares = document.querySelectorAll('.tile').length


const clickedSquares = []
const clickedOrder = []

squares.forEach(square => {
    square.onclick = getId
})

function getId(e) {
    const square = e.target
    const squareId = square.dataset.id

    if (clickedSquares.includes(square)) return

    square.classList.add('selected')

    clickedSquares.push(square)

    console.log(clickedSquares)
    
    clickedOrder.push(squareId)
    
    if(clickedSquares.length >= numerOfSquares) {
        console.log(clickedOrder)
        
        const interval = setInterval(() => {
            const square = clickedSquares.shift()
            square.classList.remove('selected')
            if(clickedSquares.length === 0) {
                clearInterval(interval)
            }
            console.log(clickedSquares)
        }, 300)
    }

}

