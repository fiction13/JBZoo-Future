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

return [
    '#__jbzoo_config' => [
        [
            'option' => 'type.post',
            'value'  => jbdata([
                'name'     => 'Type name',
                'elements' => [
                    '_name'  => [
                        'type'     => 'name',
                        'group'    => 'item',
                        'option-1' => 'Value 1',
                        'option-2' => 'Value 2'
                    ],
                    'text-1' => [
                        'id'    => 'text-1',
                        'type'  => 'text',
                        'group' => 'item',
                    ],
                    'text-2' => [
                        'id'    => 'text-2',
                        'type'  => 'text',
                        'group' => 'item',
                    ],
                    'test-1' => [
                        'id'    => 'test-1',
                        'type'  => 'test',
                        'group' => 'item',
                    ],
                ]
            ]),
        ],
    ],
    '#__jbzoo_items'  => [
        [
            'id'       => 1,
            'name'     => 'Item name',
            'type'     => 'post',
            'elements' => jbdata([
                'test-1' => [
                    'value' => '123'
                ]
            ])
        ],
    ],
];