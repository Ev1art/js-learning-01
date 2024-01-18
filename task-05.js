const startBtn5 = document.getElementById('task05-btn')

const rotateText = () => {
    const text = prompt('Введите любой текст...')
    let newText = ''
    for(let i = text.length; i > 0; i--) {
        newText = newText + text[i - 1]
    }
    alert(newText)
}

startBtn5.addEventListener('click', rotateText)