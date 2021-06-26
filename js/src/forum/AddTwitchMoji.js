/*
 * This file is part of justoverclock/flarum-ext-twitchmoji.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';

export default function () {
  // Official Twitch robot emotes: https://twitchemotes.com
  var emoticons = {
    '!)': 'ebf60cd72f7aa600',
    '!(': 'd570c4b3b8d8fc4d',
    '!o': 'ae4e17f5b9624e2f',
    '!z': 'b9cbb6884788aa62',
    '!K': '2cde79cfe74c6169',
    '!\\': '374120835234cb29',
    '!U': '3407bf911ad2fd4a',
    '!H': '3407bf911ad2fd4a',
    '!p': 'e838e5e34d9f240c',
    '!S': '0536d670860bf733',
    'o_O': '8e128fa8dc1de29c',
    '!D': '9f2ac5d4b53913d7',
    '!F': 'd31223e81104544a',
    '!L': '577ade91d46d7edc',
  };

  mapIdsToPaths(emoticons, 'https://static-cdn.jtvnw.net/jtv_user_pictures/', 'chansub-global-emoticon-', '24x18');

  document.querySelectorAll('p').forEach((e) => (e.innerHTML = replaceEmoticons(e.innerHTML, emoticons)));

  function replaceEmoticons(text, emotes) {
    return Object.keys(emotes).reduce((result, emote) => {
      return result.replace(new RegExp(RegExpEscape(emote), 'gi'), function (match) {
        return ((img) => (img != null ? '<img src="' + img + '"/>' : match))(emotes[match]);
      });
    }, text);
  }

  function RegExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }

  function mapIdsToPaths(emotes, url, prefix, size) {
    Object.keys(emotes).forEach((id) => {
      emotes[id] = url + prefix + emotes[id] + '-' + size + '.png';
    });
  }
}
