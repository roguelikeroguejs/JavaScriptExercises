
document.getElementById("run_button1").addEventListener
    ("mouseover", () => setColor(run_button1));

document.getElementById("run_button1").addEventListener
    ("mouseleave", () => resetColor(run_button1));

function setColor(run_button1) {
    document.getElementById("run_button1").style.color = "red";
}

function resetColor(run_button1) {
    document.getElementById("run_button1").style.color ="white";
}