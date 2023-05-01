document.addEventListener("DOMContentLoaded", function () {
  var saveButton = document.getElementById("save");
  saveButton.addEventListener("click", saveOptions);
});

function saveOptions() {
  var optionsTextarea = document.getElementById("options");
  var options = optionsTextarea.value.split("\n");

  chrome.storage.sync.set({ options: options }, function () {
    console.log("Options saved");
  });
}

chrome.storage.sync.get(["options"], function (result) {
  var optionsTextarea = document.getElementById("options");
  if (result.options) {
    optionsTextarea.value = result.options.join("\n");
  }
});
