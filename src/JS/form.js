const form = document.querySelector(".formContacts");
const formFooter = document.querySelector(".form-footer");

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password, subject, feedback },
  } = e.currentTarget;
  console.log(
    `Email: ${email.value}, Password: ${password.value}, Subject: ${subject.value}, Feedback: ${feedback.value}`
  );
  e.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);

// const submitFooter = (e) => {
//   e.preventDefault();
//   const {
//     element: { email },
//   } = e.currentTarget;
//   console.log(`Email: ${email.value}`);
//   e.currentTarget.reset();
// };

// formFooter.addEventListener("submit", submitFooter);
