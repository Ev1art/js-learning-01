const findBtn01 = document.getElementById('task04-btn01')
const findBtn02 = document.getElementById('task04-btn02')
const findBtn03 = document.getElementById('task04-btn03')
const findBtn04 = document.getElementById('task04-btn04')
const select01 = document.getElementById('select-01')
const select02 = document.getElementById('select-02')
const select03 = document.getElementById('select-03')
const select04 = document.getElementById('select-04')

findBtn01.addEventListener('click', () => {
    const key = select01.value
    console.log(key)
    switch (key) {
        case '1':
            const a = +prompt('Введите a (сторону)')
            const h = +prompt('Введите h (высоту)')
            alert(`S = ${a * h}`)
            break;
        case '2':
            const d1 = +prompt('Введите d1 (первую диагональ)')
            const d2 = +prompt('Введите d2 (вторую диагональ)')
            alert(`S = ${(d1 * d2) / 2}`)
            break;
        default:
            break;
    }
})
findBtn02.addEventListener('click', () => {
    const key = select02.value
    console.log(key)
    switch (key) {
        case '1':
            const r = +prompt('Введите r (радиус)')
            const h = +prompt('Введите h (высоту)')
            alert(`S = ${2 * Math.PI * (r * r) + 2 * Math.PI * r * h}`)
            break;
        default:
            break;
    }
})
findBtn03.addEventListener('click', () => {
    const key = select03.value
    console.log(key)
    switch (key) {
        case '1':
            const o = +prompt('Введите a (основание)')
            const h = +prompt('Введите h (высоту)')
            alert(`S = ${0.5 * o * h}`)
            break;
        case '2':
            const a = +prompt('Введите а (первую сторону)')
            const b = +prompt('Введите b (вторую сторону)')
            const sinA = +prompt('Введите sin(a) (угол между ними)')
            alert(`S = ${0.5 * a * b * Math.sin(sinA)}`)
            break;
        default:
            break;
    }
})
findBtn04.addEventListener('click', () => {
    const key = select04.value
    console.log(key)
    switch (key) {
        case '1':
            const a = +prompt('Введите а (первую сторону)')
            const b = +prompt('Введите b (вторую сторону)')
            alert(`S = ${a * b}`)
            break;
        case '2':
            const d = +prompt('Введите d (диагональ)')
            const sinA = +prompt('Введите sin(a) (угол между диагоналями)')
            alert(`S = ${(d**2 / 2) * Math.sin(sinA)}`)
            break;
        default:
            break;
    }
})

/*

ФОРМУЛЫ

робм
1. по стороне и высоте - a * h
2. по диагоналям - (d1 * d2) / 2
   a - сторона
   d - диагональ
   h - высота

цилиндр
1. по радиусу и высоте - 2 * pi * (r * r) + 2 * pi * r * h
   r - радиус
   h - высота

треугольник
1. по основанию и высоте - 0,5 * a * h
2. по двум сторонам и углу - 0,5 * a * b * sinA
   a - основание
   h - высота
   sinA - угол межд уними

прямоугольник
1. по двум сторонам - a * b
2. по диагонали и углу между ними - 0,5 * d**2 * sinA
   a - первая сторона
   b - вторая сторона
   d - диагональ
   sinA = угол между ними

*/