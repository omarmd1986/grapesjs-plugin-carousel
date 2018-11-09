export default (editor, config = {}) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');

    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const TYPE = 'carousel-slide';
    
    var model = defaultModel.extend({
        defaults: {
            ...defaultModel.prototype.defaults,
            droppable: false,
            traits: []
        }
    }, {
        isComponent(el) {

            if (el.tagName === 'DIV' && el.className.includes('carousel-inner') && el.getAttribute && el.getAttribute('data-type') === `${config.prefixName}-slides`) {
                return {type: TYPE};
            }
            return '';
        }
    });


    var view = defaultView.extend({
        init() {
            console.log(TYPE)
        }
    });

    domc.addType(TYPE, {

        model: model,

        view: view
    });
}