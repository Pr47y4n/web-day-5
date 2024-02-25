const storage_input = document.querySelector('.storage');
const text = document.querySelector('.text');

storage_input.addEventListener('input', letter => {
    localStorage.setItem('text_input', letter.target.value)
})
