const promptNumber = prompt('Введите число');
for (; promptNumber >= 0; promptNumber -= 1) {
    var arr = Array.of(promptNumber);
    console.log(number(arr));
}