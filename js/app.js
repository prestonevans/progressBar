const progress = document.querySelector('.progress');

let n = 0;
const percent = ['0%','33%','66%','99%']

document.querySelector('#Next').addEventListener('click', () => {
    if(n !== 3) {
        document.querySelector('#Prev').disabled = false;
        progress.style.width = percent[n += 1]
    } 
    if(n === 3) {
        document.querySelector('#Next').disabled = true;
    }
})
document.querySelector('#Prev').addEventListener('click', () => {
    if(n !== 0) {
        document.querySelector('#Next').disabled = false;
        progress.style.width = percent[n -= 1];
    } 
    if(n === 0) {
        document.querySelector('#Prev').disabled = true;
    }
})