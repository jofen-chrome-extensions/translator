// Saves options to chrome.storage
function save_options() {
  var lang = document.getElementById('lang').value;
  chrome.storage.sync.set({
    targetLanguage: lang
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value lang = 'english'.
  chrome.storage.sync.get({
    targetLanguage: 'en'
  }, function(items) {
    document.getElementById('lang').value = items.targetLanguage;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);