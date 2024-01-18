const startBtn2 = document.getElementById('task02-btn')
const firstInput = document.getElementById('task02-input01')
const secondInput = document.getElementById('task02-input02')

const checkMultiplicity = (a, b) => {
    // Проверка на пустые строки
    if(a === '' || b === '') {
        alert('Введите число')
        return
    }
    alert(a % b === 0)
}

startBtn2.addEventListener('click', () => {checkMultiplicity(firstInput.value, secondInput.value)})
