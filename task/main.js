function validForm() {
    // الحصول على جميع الحقول
    var fields = [
        document.getElementById('validationDefault01'),
        document.getElementById('validationDefault02'),
        document.getElementById('validationDefault03'),
        document.getElementById('validationDefault04'),
        document.getElementById('staticEmail'),
        document.getElementById('inputPassword')
    ];

    var isValid = true;

    // تحقق من كل حقل
    fields.forEach(function(field) {
        if (!field.value.trim()) {
            field.classList.add('is-invalid'); // إضافة الكلاس لجعل الحقل خاطئًا
            isValid = false; // تعيين المتغير إلى false
        } else {
            field.classList.remove('is-invalid'); // إزالة الكلاس إذا كان الحقل صحيحًا
        }
    });

    // تحقق من البريد الإلكتروني (يجب أن يحتوي على @ ورقم)
    var emailValue = document.getElementById('staticEmail').value;
    var hasAtSymbol = emailValue.includes('@');
    var hasNumber = /\d/.test(emailValue);
    if (!hasAtSymbol || !hasNumber) {
        document.getElementById('staticEmail').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('staticEmail').classList.remove('is-invalid');
    }

    // إذا كان كل شيء صحيحًا، السماح بتقديم النموذج
    return isValid;
}











dark.onclick = function em() {
    var dark = document.getElementById("dark")
    var body = document.getElementById("body")



    body.classList.toggle("dark")

}
