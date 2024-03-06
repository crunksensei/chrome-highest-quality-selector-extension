function injectExternalScript() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('pageScript.js');
    (document.head || document.documentElement).appendChild(script);
}

injectExternalScript();
