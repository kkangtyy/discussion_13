// Styling heading
let heading1 = document.querySelector("h1")
heading1.style.color = "purple"; 
heading1.style.textAlign = "center"

// Time alert on double-click
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    var s = today.getSeconds();
    return [h, m, s].join(':')
}
document.addEventListener('dblclick', (alert(startTime())));