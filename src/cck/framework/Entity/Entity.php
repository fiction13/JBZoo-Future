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

namespace JBZoo\CCK\Entity;

use JBZoo\CCK\App;

/**
 * Class Entity
 * @package JBZoo\CCK
 */
abstract class Entity
{
    /**
     * @var App
     */
    public $app;

    /**
     * Entity constructor.
     */
    public function __construct()
    {
        $this->app = App::getInstance();
    }

    /**
     * @param $row
     */
    public function bindData($row)
    {

    }
}