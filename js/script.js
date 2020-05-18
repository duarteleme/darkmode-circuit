function addClass() {
    var body = document.body;
    body.classList.toggle("darkmode");
}

chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
        addClass();
    }
});
