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

import React, { Component } from 'react'

import SelectField  from 'material-ui/SelectField';
import MenuItem     from 'material-ui/MenuItem';

export default class FieldSelect extends Component {

    constructor(props) {
        super(props);

        for (var first in props.data.options) break;
        var selected = props.data.value !== undefined ? props.data.value : props.data.default;
        selected = selected !== undefined ? selected : first;

        this.state = {value: "" + selected};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        var rows = [];
        _.forEach(this.props.data.options, function (text, key) {
            rows.push(<MenuItem key={key} value={key} primaryText={text} />);
        });

        return <SelectField
            id={this.props.id}
            value={this.state.value}
            name={this.props.name}
            onChange={this.handleChange}
        >
            {rows}
        </SelectField>;
    }
}