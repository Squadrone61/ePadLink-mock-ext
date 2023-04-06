const settingsKey = "eSigMockSettings";
const defaultOptions = {
  isActive: false,
  resType: "success",
};
let options;

async function sendOptions(options) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, options);
}

function formChange() {
  const formValue = {
    resType: document.forms[0].elements.namedItem("resType").value,
    isActive: document.forms[0].elements.namedItem("isActive").checked,
  };
  //save
  chrome.storage.local.set({ [settingsKey]: formValue });
  //send
  sendOptions(formValue);
}
function updateForm(options) {
  document.forms[0].elements.namedItem("resType").value = options.resType;
  document.forms[0].elements.namedItem("isActive").checked = options.isActive;
}

chrome.storage.local.get(settingsKey).then((opts) => {
  options = opts ? opts[settingsKey] || defaultOptions : defaultOptions;
  updateForm(options);
  const form = document.querySelector("form");
  form.addEventListener("change", formChange);
});
