const inputs = document.querySelectorAll("input");
const canvas = document.getElementById("qr");

const createQR = v => {
  return new QRious({
    element: canvas,
    value: v,
    size: 400,
    backgroundAlpha: 0,
    foreground: "white" });

};

const qr = createQR(inputs.value);
inputs.forEach((input) => {
  input.addEventListener("input", function() {
    const qr = createQR(input.value);
  });
})
