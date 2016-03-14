<?php
/**
 * JBZoo CrossCMS
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package   CrossCMS
 * @license   MIT
 * @copyright Copyright (C) JBZoo.com,  All rights reserved.
 * @link      https://github.com/JBZoo/CrossCMS
 * @author    Denis Smetannikov <denis@jbzoo.com>
 */
/*
Plugin Name: JBZoo PHPUnit
Description: JBZoo PHPUnit Plugin for unit-testing
Author: Denis Smetannikov <denis@jbzoo.com>
Version: 1.0
Author URI: http://jbzoo.com
*/


if (isset($_REQUEST['jbzoo-phpunit'])) {

    if (isset($GLOBALS['__TEST_FUNC__']) && $GLOBALS['__TEST_FUNC__'] instanceof \Closure) {
        $GLOBALS['__TEST_FUNC__']();
    } else {
        throw new Exception('__TEST_FUNC__ is not \Closure function!');
    }
}
