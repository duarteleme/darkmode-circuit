// function addClass() {
//     var body = document.body;
//     body.classList.toggle("darkmode");
// }


var statusDarkMode = true;
var body = document.body;

body.classList.add("darkmode");

chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {        
        if (statusDarkMode) {
            body.classList.remove("darkmode");
            statusDarkMode = false;
        } else {
            body.classList.add("darkmode");
            statusDarkMode = true;
        }
    }
});
