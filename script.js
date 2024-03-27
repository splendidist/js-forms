const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //prevents refresh and url change
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
});

//output: {name: 'test', email: 'test@test.com', password: 'test'}
