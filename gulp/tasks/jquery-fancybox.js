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

var gulp     = require('gulp'),
    params   = require('../config'),
    uglify   = require('gulp-uglify'),
    concate  = require('gulp-concat'),
    replace  = require('gulp-replace'),
    cleanCSS = require('gulp-clean-css'),
    source   = params.path.bower + '/fancybox/',
    atoms    = params.path.atoms,

    config = {
        js: [
            source + 'source/jquery.fancybox.pack.js',
            source + 'source/helpers/jquery.fancybox-buttons.js',
            source + 'source/helpers/jquery.fancybox-thumbs.js',
            source + 'source/helpers/jquery.fancybox-media.js'
        ],
        css: [
            source + 'source/jquery.fancybox.css',
            source + 'source/helpers/jquery.fancybox-buttons.css',
            source + 'source/helpers/jquery.fancybox-thumbs.css'
        ],
        images: [
            source + 'source/helpers/**/*.{jpg,png,svg,gif,webp,ico}',
            source + 'source/*.{jpg,png,svg,gif,webp,ico}'
        ]
    },

    dist = {
        images: atoms + 'jquery-fancybox/assets/images',
        css: atoms + 'jquery-fancybox/assets/css',
        js: atoms + 'jquery-fancybox/assets/js'
    };

gulp.task('update:fancybox', function () {
    //  Scripts
    gulp.src(config.js)
        .pipe(concate('fancybox.min.js'))
        .pipe(uglify({
            preserveComments: 'license'
        }))
        .pipe(gulp.dest(dist.js));

    //  Styles
    gulp.src(config.css)
        .pipe(concate('fancybox.min.css'))
        .pipe(replace(/url\('?(.*)'?\)/g, "url('../images/$1')"))
        .pipe(replace("''", "'"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist.css));

    //  Images
    gulp.src(config.images)
        .pipe(gulp.dest(dist.images));
});
