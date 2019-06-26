// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled

const kLangs = {
    'en': 'English',
    'fr': 'Frech',
    'de': 'German',
    'it': 'Italian',
    'es': 'Spanish',
    'ru': 'Russian',
    'zh-CN': 'Chinese',
    'ja': 'Japanese',
    'ko': 'Korean',
    'hi': "Hindi",
    'ar': 'Arabic',
    'la': 'Latin'
  };

const kOption = {
    'full': 'Full Page',
    'selected': 'Selected'
  };

chrome.runtime.onInstalled.addListener(function() {
    for (let key of Object.keys(kOption)) {
      chrome.contextMenus.create({
        id: key,
        title: 'Translate ' + kOption[key],
        type: 'normal',
        contexts: ['all'],
      });
    }
  });

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "selected") {
    translate(info.selectionText, tab);
  } else if (info.menuItemId == "full") {
    translateFullPage(tab);
  } else {
    console.log("item " + info.menuItemId + " was clicked");
  }
});
