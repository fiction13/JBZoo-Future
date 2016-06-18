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

import * as defines from '../defines'

export default function items(state = [], action) {

    switch (action.type) {
        case defines.ITEMS_LIST_SUCCESS:
            return action.payload;

        case defines.ITEMS_ITEM_SUCCESS:

            var newState = {...state};
            newState[action.payload.id] = action.payload.data;

            return newState;

        default:
            return state;
    }
}
