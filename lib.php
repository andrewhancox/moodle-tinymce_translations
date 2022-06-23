<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @package tinymce_translations
 * @author Andrew Hancox <andrewdchancox@googlemail.com>
 * @author Open Source Learning <enquiries@opensourcelearning.co.uk>
 * @link https://opensourcelearning.co.uk
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @copyright 2021, Andrew Hancox
 */

use filter_translations\translation;

defined('MOODLE_INTERNAL') || die();

class tinymce_translations extends editor_tinymce_plugin {
    protected function update_init_params(array &$params, context $context,
                                          array $options = null) {
        // Do not add tranlation hashes to translations.
        if ($params['elements'] == 'id_substitutetext_editor') {
            return;
        }

        $unusedhash = md5(random_string(32));

        // Do our best to make sure it's unique.
        while (!empty(translation::get_record(['md5key' => $unusedhash])) || !empty(translation::get_record(['lastgeneratedhash' => $unusedhash]))) {
            $params ['unusedhash'] = md5(random_string(32));
        }

        $this->add_js_plugin($params);
    }
}
