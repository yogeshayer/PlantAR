document.addEventListener("DOMContentLoaded", () => {
  function onScanSuccess(decodedText) {
    if (/^https?:\/\//i.test(decodedText)) {
      if (confirm(`Open link?\n\n${decodedText}`)) window.open(decodedText, "_blank");
    } else {
      alert(`Your QR is: ${decodedText}`);
    }
  }
  function onScanError(_) {}
  const htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbox: 250 });
  htmlscanner.render(onScanSuccess, onScanError);
});
