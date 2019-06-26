// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function translate(text, tab) {
	chrome.storage.sync.get({
    	targetLanguage: 'en'
  	}, function(items) {
    	const url = `http://translate.google.com/#auto/${items.targetLanguage}/${encodeURIComponent(text)}`;
  		chrome.tabs.create({url: url, index: tab.index + 1});
  	});
}

function translateFullPage(tab) {
	chrome.storage.sync.get({
    	targetLanguage: 'en'
  	}, function(items) {
  		const translatePageUrl = `https://translate.google.com/translate?tl=${items.targetLanguage}&u=${tab.url}`;
  		chrome.tabs.create({url: translatePageUrl, index: tab.index + 1});
  	});
}

