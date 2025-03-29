const input = document.getElementById("input")

input.addEventListener('input', function(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = 'color';
});