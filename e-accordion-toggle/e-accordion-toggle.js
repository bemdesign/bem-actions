/**
 * @module e-accordion-toggle
 */

modules.define('e-accordion-toggle', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                inited: function () {
                    this._items = this.findChildElems('item');
                }
            }
        },

        _onToggleActive: function (e) {
            const currentItem = e.bemTarget.findParentElem('item');
            const isOpen = currentItem.hasMod('view', 'active');

            this._items.delMod('view');

            if (!isOpen) {
                currentItem.setMod('view', 'active');
            }
        }
    }, {
            lazyInit: true,
            onInit: function () {
                this._domEvents('short').on('click', this.prototype._onToggleActive);
            }
        }
    ));
});

// Старый jQuery код
// TODO: выпилить

// $('.e-accordion-toggle__short').click(function () {

//   $('.e-accordion-toggle__item').removeClass('e-accordion-toggle__item_view_active');
//   $('.e-accordion-toggle__more').slideUp('normal');
//   if ($(this).next().is(':hidden') == true) {
//     $(this).parent().addClass('e-accordion-toggle__item_view_active');
//     $(this).next().slideDown('normal');
//   }
// });
