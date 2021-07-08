const form = document.getElementById('categ-form');
const formType = document.getElementById('form-type');
const formValue = document.getElementById('form-value');

let products = document.getElementsByClassName("product-link");

for (var i = 0; i < products.length; i++) {
    products[i].addEventListener('click', (e) => {
        formType.value = "product";
        formValue.value = e.target.name;
        form.submit();
    });
}