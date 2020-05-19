window.onload = function () {
    
    var statusDarkMode = true;
    var element = document.getElementById("toggle-btn");

    document.getElementById('toggle-btn').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            if (statusDarkMode) {
                element.classList.remove("active");
                statusDarkMode = false;
            } else {
                element.classList.add("active");
                statusDarkMode = true;
            }
            chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
        });
    });
};