const form = document.getElementById('categories-form');
const formType = document.getElementById('form-type');
const formValue = document.getElementById('form-value');

let categories = document.getElementsByClassName("category-link");

for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', (e) => {
        formType.value = "category";
        formValue.value = e.target.name;
        form.submit();
    });
}