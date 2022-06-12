const adElement = document.querySelector(".header_ad");
let adBlocker = false;

checkInterval = setInterval(() => {
    checkAdBlocker();
}, 100)


function checkAdBlocker() {
    if (adElement.offsetHeight == 0) {
        console.log("adblock");
        clearInterval(checkInterval);
        console.log("Please disable your Adblocker");
        alert("Please disable your Adblocker");
        location.reload()
    }
}
