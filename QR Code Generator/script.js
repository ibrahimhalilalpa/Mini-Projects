const imgBox = document.getElementById("imgBox"); // imgBox id'sini doğru şekilde al
const qrImage = document.getElementById("qrImage"); // qrImage id'sini doğru şekilde al
const qrText = document.getElementById("qrText"); // qrText id'sini doğru şekilde al

function GenerateQR() {

    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
