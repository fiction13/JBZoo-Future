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

import React, {PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import Divider      from 'material-ui/Divider/Divider';
import List         from 'material-ui/List/List';
import ListItem     from 'material-ui/List/ListItem';
import * as colors  from 'material-ui/styles/colors';
import JBZoo        from '../../../../../assets/jsx/Globals';

const ACTIVE = {fontWeight: "bold", color: colors.lightBlue700};

class Sidebar extends Component {
    render() {

        return <List>
            <ListItem containerElement={<IndexLink activeStyle={ACTIVE} to="/" />} primaryText="Dashboard" />
            <Divider />
            {
                JBZoo.sidebar.map(function (item, key) {
                    let link = <Link to={item.path} />;
                    return <ListItem key={key} activeStyle={ACTIVE} containerElement={link} primaryText={item.name} />;
                })
            }
            <Divider />
            <ListItem containerElement={<Link activeStyle={ACTIVE} to="/about" />} primaryText="...about JBZoo" />

        </List>;
    }
}

module.exports = Sidebar;