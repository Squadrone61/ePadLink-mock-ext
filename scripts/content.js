const mockSuccessResponse = {
  errorMsg: null,
  imageData:
    "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",
  isSigned: true,
  padInfo: "ePad-ink",
  rawData:
    "CgAAACRWUEFEJDIuMCQAAAAAAAAAAAAAAAAAAAAAMwAAAENEOUMzMjc0RUU3QkZCMTZDQzFCREUyMTE4RjExRUY1MjFBQTk3RjIgKGVQYWQtaW5rKf9/AADWXQAAMvcLYQAAAAAwKgAAgAAAADdWXbq7+1CPtMHD2W9EtmmbYPoyHFo/DnDBPt0Vb+xmJ5gyBcaGvHkmEY++XFkKRlURByXha+06X+KOLdabFvQ5xVvotdYV1fXtIzIG1DBgyL+ALVQRppl4phE7hICwEuJ4wMf4EmZ7LNTAZfxhFlumBMA/Gsflqe+M0DLL7GmxAAMAAImzV74VVCClvPfZwmzNntIIZOqh6TYh0MAWqK4s2KTGOpPDRTGJGaKpbJ90s+PbZFUsZ+nlEphrcVTMAf25tayLApSNjJlfIJph8/oAZnJ7Xzr46+JuEb9e5yqPijbgMNPx7mVyBUfY6LRdUXLo92eDbWpGM7xApgycytC1YoakSGwgcE50jtNrGU5TlJ9keUsiHrFm7rYy9DXDw4ktKgPqovrNfgFQJwzh/sjnsfZUNenF60px2rPW56DgwzQ6K4aBqjpaXPJkZE9FjNIRJlT0Ufq5I568HW351VSl4LfTY9Wzn+X5YyETVv04p6nah9VjpkWIBKimZ7hBg2b/k6JKsEHgglDzh6RnuKMZhdlQMZdGcgTYfYZdC4PnzCiubVirgQWe8wONbFV8tmtSOF2XZ6t9pn5xKcDujG6+O5eLGoLRjS6HzxnKUrDRJnOs3W/SNoUBTS7q+zXqK/6/TyBy61aVux6BeuH7eJq+xxfByxGu+J4JOjyafcidkLKCscKBoWN7nSRgQKQfFQ/0zHvB8F8XV39ip9s/ITZFtlyLduQL14MJCLRNh/tRCDHAYSyLa0baQV9yMrXeDOOCdCXL+/Fpto/nUjTo02q4JoB/EiadVkgCUKuxSq1tqQpIjtzivhRVs76JGexdgxlCJsahkZtdgNWM7wioT2uxw4qS4WZ11pXPn8fBaG/2gqdpbUMASeA0uHrUy+L+3a/0oucIbU6NbtryKrP6S1+5JUdXMkGpB0HFuji+sX/mOADgulXyQXHk7eK1ptEJgESDXKJ1i9cxruIc+Q0kvIZG+DNA9yv0u1AFEHIKh52CPMaRmmH7lYhv5eF6oFU58olE96eEZtjp8DMchK10uJXygZ84wwD57gByyaQBLqUYWsDmJZtjablu+6PGRkSQ072sfYmFK+xe7vXa9xhfBMrW0U1FZthpxWwxNWwI0tYn40+tETZzQHUkci3qVqkl0d7nY92kx0UCEwgMqnTEAFIOq+z4hg94YVI2BprNRFCDP72Z2w==",
  sigString: null,
};
const mockErrResponse = {
  errorMsg: "Error response (test)",
  imageData: "",
  isSigned: false,
  padInfo: "ePad-ink",
  rawData: null,
  sigString: null,
};
const settingsKey = "eSigMockSettings";
let options;

function SignStart() {
  console.log("eSig start signal received");
  if (options?.isActive) {
    const res =
      options?.resType === "success" ? mockSuccessResponse : mockErrResponse;
    setTimeout(()=> {
      SignResponse(res);
    },200)
    console.log("ePadLink mocked!");
  } else {
    console.log("activate mock from extension popup")
  }
}

function SignResponse(response) {
  var responseData = JSON.stringify(response);
  var element = document.createElement("SigCaptureWeb_MyExtDataElem");
  element.setAttribute("SigCaptureWeb_msgAttri", responseData);
  document.documentElement.appendChild(element);
  var evt = new Event("SigCaptureWeb_SignResponse", {
    bubbles: true,
    cancelable: false,
  });
  element.dispatchEvent(evt);
  //document.documentElement.removeChild(element)
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request) {
    options = request;
    sendResponse({ success: true });
  }
});

chrome.storage.local.get(settingsKey).then((opts) => {
  options = opts && opts[settingsKey];
});

document.addEventListener("SigCaptureWeb_SignStartEvent", SignStart);
