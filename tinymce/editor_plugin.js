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

(function () {
    var translationsplugin = {
        translationhashregex: /<span data-translationhash[ ]*=[ ]*[\'"]+([a-zA-Z0-9]+)[\'"]+[ ]*>[ ]*<\/span>/,
        translationhash: null,

        init: function (ed, url) {
            /*
            var textarea = document.getElementById(ed.id);
            var initialvalue = textarea.value;
            var unusedhash = ed.getParam('unusedhash', {});

            var foundtranslationspan = translationsplugin.translationhashregex.exec(initialvalue);
            if (!unusedhash || foundtranslationspan) {
                translationsplugin.translationhash = foundtranslationspan;
                return;
            }

            ed.schema.addValidElements('span[data-translationhash]');

            ed.onInit.add(function() {
                translationsplugin.translationhash = "<span data-translationhash='" + unusedhash + "'></span>";
                textarea.set('value', translationsplugin.translationhash + initialvalue);
                ed.execCommand('mceRepaint');

                var form = textarea.ancestor('form');
                if (form) {
                    form.on('submit', function () {
                        if (textarea.get('value') === translationsplugin.translationhash) {
                            textarea.set('value', '');
                            ed.execCommand('mceRepaint');
                        }
                    }, this);
                }
            });

             */
        },

        /**
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo: function () {
            return {
                longname: 'Translations plugin',
                author: 'Andrew Hancox',
                authorurl: 'https://opensourcelearning.co.uk',
                infourl: 'https://opensourcelearning.co.uk',
                version: "1.0"
            };
        }
    };

    tinymce.create('tinymce.plugins.translationsPlugin', translationsplugin);

    // Register plugin.
    tinymce.PluginManager.add('translations', tinymce.plugins.translationsPlugin);
})();
