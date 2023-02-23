const form = document.querySelectorAll(".formToHandle");

const formHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  e.currentTarget.reset();
};

for (let i = 0; i < form.length; i++) {
  let el = form[i];
  el.addEventListener("submit", formHandler);
}
