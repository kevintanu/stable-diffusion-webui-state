window.state = window.state || {};
window.state.extensions = window.state.extensions || {};
state = window.state;

state.extensions['aspect-ratio'] = (function () {
    let containers = [];
    let store = null;

    function handleSelects() {
        const app = gradioApp()
        const txt2img = app.getElementById("txt2img_select_aspect_ratio");
        const img2img = app.getElementById("img2img_select_aspect_ratio");

        containers.push({container: txt2img, name: 'txt2img'});
        containers.push({container: img2img, name: 'img2img'});
        
        containers.forEach(function ({container, name}) {
            let id = `ar-${name}`;
            let value = store.get(id);
            if (value) {
                container.value = value;
            }

            container.addEventListener('change', function () {
                store.set(id, this.value);
            });
        })
    }

    function load() {
        setTimeout(function () {
            handleSelects();
            console.log('Aspect Ratio extension loaded');
        }, 8000);
    }

    function init() {
        store = new state.Store('ext-aspect-ratio');

        load();
    }

    return { init };
}());
