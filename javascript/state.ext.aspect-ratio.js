window.state = window.state || {};
window.state.extensions = window.state.extensions || {};
state = window.state;

state.extensions['aspect-ratio'] = (function () {
    let container = null;
    let store = null;

    function handleSelect() {
        let id = `ar-select`;
        let value = store.get(id);
        if (value) {
            container.value = value;
        }
        container.addEventListener('change', function () {
            store.set(id, this.value);
        });
    }

    function load() {
        setTimeout(function () {
            handleSelect();
        }, 2000);
    }

    function init() {
        container = gradioApp().getElementById("txt2img_select_aspect_ratio");
        store = new state.Store('ext-aspect-ratio');

        load();
    }

    return { init };
}());
