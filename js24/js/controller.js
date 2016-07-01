/**
 * Created by apple on 05.06.16.
 */

define('controller', [],
    function Controller(model, view) {
        var self = this;

        view.elements.addButton.on('click', addItem);
        view.elements.listContainer.on('click', '.item-delete', removeItem);

        function addItem() {
            var newItem = view.elements.input.val();
            model.addItem(newItem);
            view.renderList(model.data);
            view.elements.input.val('');
        }

        function removeItem() {
            var item = $(this).attr('data-value');

            model.removeItem(item);
            view.renderList(model.data);
        }
    }
);