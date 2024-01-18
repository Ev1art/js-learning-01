const startBtn3 = document.getElementById('task03-btn')
const firstTringleInput = document.getElementById('task03-input01')
const secondTringleInput = document.getElementById('task03-input02')
const thirdTringleInput = document.getElementById('task03-input03')

const isTringleTrue = (a, b, c) => {
    // Проверка на пустую строку
    if(a === '' || b === '' || c === '') {
        alert('Введите число')
        return
    }

    alert(a + b > c && a + c > b && b + c > a ?
        'Треугольник существует' :
        'Треугольник НЕ существует')
}

startBtn3.addEventListener('click', () => {
    isTringleTrue(firstTringleInput.value,
        secondTringleInput.value,
        thirdTringleInput.value
)})
