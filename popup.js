window.onload = function () {
    
    function changeStatus() {
        var element = document.getElementById("toggle-btn");
        element.classList.toggle("active");
    }

    document.getElementById('toggle-btn').addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            changeStatus();
            chrome.tabs.sendMessage(activeTabs[0].id, { action: 'executeCode' });
            
        });
    });
};