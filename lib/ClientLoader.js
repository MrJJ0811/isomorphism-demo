module.exports = function(source) {
    return `
        ${source}
        const Com = module.exports;
        new Com(window.__initial_props__, {
            mount: document.querySelector('#app')
        });
    `;
};