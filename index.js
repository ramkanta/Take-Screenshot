const container = document.getElementById("container");

const captureButton = document.getElementById("capture-button");
const previewContainer = document.getElementById("preview-container");
const downloadbutton = document.getElementById("download-button");

captureButton.addEventListener("click", async () =>{
    downloadbutton.classList.remove("hide");
    const canvas = await html2canvas(container);
    const imageURL = canvas.toDataURL();
    previewContainer.innerHTML = `<img src="${imageURL}" id="image">`;
    downloadbutton.href = imageURL;
    downloadbutton.download = "image.png";


})
window.onload = () => {
    downloadbutton.classList.add("hide");
    previewContainer.innerHTML = "";

}
