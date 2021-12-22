(() => {
    const EDITOR_STRING = '/editor.html';
    const WCM_MODE_DISABLED_QUERY_PARAM = '?wcmmode=disabled';
    let url = window.location.href;
    const hasEditor = url.indexOf(EDITOR_STRING) !== -1;
    if (hasEditor) {
        url = url.split(EDITOR_STRING).join('');
    }
    const hasWcmModeDisabled = url.indexOf(WCM_MODE_DISABLED_QUERY_PARAM) !== -1;
    if (hasWcmModeDisabled) return;
    const urlArray = url.split('#');
    url = `${urlArray[0]}${WCM_MODE_DISABLED_QUERY_PARAM}${urlArray[1] ? '#' + urlArray[1] : ''}`;
    if (window.location.href === url) return;
    window.location.href = url;
})();
