function afficherMessage() {
  const name = document.getElementById("fullnam").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("adress").value;
  const experience = document.getElementById("exp").value;
  const brand = document.getElementById("brands").value;
  const message = `Thank you, ${name}!
    We have received your order for ${brand}.
    A confirmation will be sent to: ${email}.
    Delivery address: ${address}.
    Your experience: ${experience}.
    We truly appreciate your trust and hope you enjoy your purchase!`;
  alert(message);
}
