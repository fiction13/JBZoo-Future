<?php
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

namespace JBZoo\PHPUnit;

/**
 * Class ElementItem_TestTest
 */
class ElementItem_TestTest extends JBZooPHPUnit
{
    public function testCreate()
    {
        $element = $this->app['elements']->create('Test', 'item');
        isClass('\JBZoo\CCK\Element\Item\Test', $element);
    }
}
