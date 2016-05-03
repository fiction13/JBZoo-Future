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

import JBZoo        from '../../../../../assets/jsx/Globals';
import * as defines from '../defines';

function requestAtoms() {
    return {
        type   : defines.ATOMS_LIST_REQUEST,
        payload: false
    }
}

function receiveAtoms(atoms) {
    return {
        type   : defines.ATOMS_LIST_SUCCESS,
        payload: atoms.list
    }
}

function fetchAtoms() {
    return dispatch => JBZoo.ajax('atoms.index.atoms', {}, dispatch, receiveAtoms);
}

function shouldFetchAtoms(state) {
    return !state.atomsForms;
}

export function fetchAtomsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchAtoms(getState())) {
            return dispatch(fetchAtoms())
        }
    }
}
