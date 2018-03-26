/**
 * @module e-accordion
 */

modules.define('e-accordion', ['i-bem-dom'], function (provide, BEMDOM) {
    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            'js': {
                inited: function () {
                    return true;
                }
            }
        },

        _onToggleActive: function (e) {
            const currentItem = e.bemTarget.findParentElem('item');
            const isOpen = currentItem.hasMod('view', 'active');

            currentItem.toggleMod('view', 'active');
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
// TODO: вырезать

/* Переписать SlideDown на CSS, только ХЗ как сделать чтобы это было красиво */

// $('.e-accordion__short').click(function() {
// 	var __this = $(this);

// 	if(__this.parent().hasClass('e-accordion__item'))
// 		__this.parent().toggleClass('e-accordion__item_view_active');
// 	else if(__this.hasClass('e-accordion__item'))
// 		__this.toggleClass('e-accordion__item_view_active');

// 	$(this).next().slideToggle('normal');
// });
