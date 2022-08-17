const form = document.getElementById("register");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const payload = new FormData(form);
  const rawResponse = await fetch("/users/register", {
    method: "POST",
    body: payload,
  });
  const content = await rawResponse.json();
  msg.innerHTML = content.message;
});
