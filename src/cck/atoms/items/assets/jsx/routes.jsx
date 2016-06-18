/**
 * JBZoo CCK
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    CCK
 * @license    Proprietary http://jbzoo.com/license
 * @copyright  Copyright (C) JBZoo.com,  All rights reserved.
 * @link       http://jbzoo.com
 */

'use strict';

import { injectAsyncReducer } from '../../../core/assets/jsx/store/configureStore';

var ItemsApp;
var NewItem;

module.exports.default = function (reducerRegistry, atomKey) {

    reducerRegistry.register({
        items: require('./reducers').default
    });

    return [
        {
            path        : '/items',
            getComponent: (nextState, callback) => {

                if (!ItemsApp) {
                    ItemsApp = require('./ItemsApp');
                }

                callback(null, ItemsApp);
            }
        },
        {
            path        : '/items/new',
            getComponent: (nextState, callback) => {

                if (!NewItem) {
                    NewItem = require('./components/NewItem');
                }

                callback(null, NewItem);
            }
        },
        {
            path        : '/items/edit/:id',
            getComponent: (nextState, callback) => {

                if (!NewItem) {
                    NewItem = require('./components/NewItem');
                }

                callback(null, NewItem);
            }
        }
    ]
};
