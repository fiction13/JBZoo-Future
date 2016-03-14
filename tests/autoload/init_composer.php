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

// main autoload
if ($composerPath = realpath('./composer.json')) {
    $autoloadConfig = json_decode(file_get_contents($composerPath), true);
    $autoloadPath   = $autoloadConfig['config']['vendor-dir'] . '/autoload.php';
    require_once $autoloadPath;

} else {
    echo 'Please execute "composer update" !' . PHP_EOL;
    exit(1);
}
