
document.querySelectorAll('input[required]').forEach(function(input) {
    var label = document.querySelector('label[for="' + input.id + '"]');
    if (label) {
        label.innerHTML += ' <span style="color: red;">*</span>';
    }
});
