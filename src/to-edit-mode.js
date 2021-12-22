(() => {
    const EDITOR_STRING = 'editor.html';
    const WCM_MODE_DISABLED_QUERY_PARAM = '?wcmmode=disabled';
    let url = window.location.href;
    const hasEditor = url.indexOf(EDITOR_STRING) !== -1;
    if (!hasEditor) {
        const urlArray = url.split('/');
        urlArray.splice(3, 0, EDITOR_STRING);
        url = urlArray.join('/');
    }
    const hasWcmModeDisabled = url.indexOf(WCM_MODE_DISABLED_QUERY_PARAM) !== -1;
    if (hasWcmModeDisabled) {
        const urlArray = url.split('#');
        url = urlArray[0].split(WCM_MODE_DISABLED_QUERY_PARAM)[0];
        url = urlArray[1] ? url + '#' + urlArray[1] : url;
    }
    if (window.location.href === url) return;
    window.location.href = url;
})();
