const startBtn = document.getElementById('task01-btn')

const isAdult = () => {
    const age = +prompt("Введите возраст", 1)
    // Проверка на NaN и пустую строку
    if(isNaN(age) || age === 0) {
        alert('Error, введите число')
        return
    }
    alert(age < 18 ? 'Несовершеннолетний':'Совершеннолетний')
}

startBtn.addEventListener('click', isAdult)
