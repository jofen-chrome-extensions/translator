// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const googleUrl = 'https://translate.google.com/';
const developersUrl = 'https://github.com/jofen-chrome-extensions/translator';
const donateUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=2M474PCNZVZFC&currency_code=CAD&source=url';


chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){        
    document.getElementById('google').onclick = function () {
        chrome.tabs.create({active: true, url: googleUrl});
    };
    document.getElementById('developers').onclick = function () {
        chrome.tabs.create({active: true, url: developersUrl});
    };
    document.getElementById('issues').onclick = function () {
        chrome.tabs.create({active: true, url: `${developersUrl}/issues`});
    };
    document.getElementById('donate').onclick = function () {
        chrome.tabs.create({active: true, url: donateUrl});
    };

    document.getElementById('options').onclick = function () {
        //chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
        chrome.runtime.openOptionsPage();
    };
    
});