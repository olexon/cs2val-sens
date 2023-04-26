const btn = document.getElementById("conv_btn");
const res = document.getElementById("res_btn");

btn.addEventListener("click", function() {
    if (document.getElementById("cs_sens").value.length > 0) {
        document.getElementById("val_sens").value = (parseFloat(document.getElementById("cs_sens").value) / 3.18).toFixed(2);
    } else if (document.getElementById("cs_sens").value.length == 0 && document.getElementById("val_sens").value.length > 0) {
        document.getElementById("cs_sens").value = (parseFloat(document.getElementById("val_sens").value) * 3.18).toFixed(2);
    } else {
        alert("ERROR: Please fill at least one box with a number!");
    }
});

res.addEventListener("click", function() { 
    document.getElementById("cs_sens").value = "";
    document.getElementById("val_sens").value = "";
});