const rangeTl = document.getElementById('tlr'),
      rangeTr = document.getElementById('trr'),
      rangeBl = document.getElementById('blr'),
      rangeBr = document.getElementById('brr');

let   resultTl = document.getElementById('result-tlr'),
      resultTr = document.getElementById('result-trr'),
      resultBl = document.getElementById('result-blr'),
      resultBr = document.getElementById('result-brr');

const input = document.querySelectorAll('.input');

const cube = document.getElementById('cube');

const total = document.getElementById('total-result');
const btn = document.getElementById('btn');

const changeRadius = () => {
    resultTl.innerHTML = rangeTl.value;
    resultTr.innerHTML = rangeTr.value;
    resultBl.innerHTML = rangeBl.value;
    resultBr.innerHTML = rangeBr.value;

    cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';

}

const totalResult = () => {
    total.innerHTML = rangeTl.value + ' ' + rangeTr.value + ' ' + rangeBr.value + ' ' + rangeBl.value + ' ';
}

btn.addEventListener('click', totalResult);

input.forEach(item => {
    item.addEventListener('input', changeRadius)
})

