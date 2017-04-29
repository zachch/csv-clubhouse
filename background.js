(function (){
  chrome.browserAction.onClicked.addListener(function(tab) {
    "use strict"
    chrome.tabs.executeScript({file: 'lib/jquery-3.2.1.min.js'}, function(){
      chrome.tabs.executeScript({file: 'lib/utils.js'}, function(){
        chrome.tabs.executeScript({file: 'lib/clubhouse.js'}, function(){
          chrome.tabs.executeScript({ file: 'main.js' })
        })
      })
    })
  })
})()
