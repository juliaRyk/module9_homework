const resultNode = document.querySelector('input').value;
const btn = document.querySelector('.j-btn-request');

    btn.addEventListener('click', () => {
        const value = document.getElementById('num').value;
        let n = document.getElementById('result');
        n.textContent = '';
        if (value < 1 && value > 10) {
            n.textContent = 'Номер страницы вне диапазона от 1 до 10';
            return;
        }
        else (!(value < 1 && value > 10)) {
        fetch(`https://picsum.photos/v2/list?limit=${value}`)
                .then((response) => {
                    document.getElementById('result').src = response.url;
                });
            console.log(result);
        }
    });