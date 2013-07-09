// Copyright 2010-2012 Ryan Gerard
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

var config = require('./config'),
    request = require('request'),
    urlHelper = require('./util/url_helper');

function init(apikey) {
    config.apikey = apikey;
}

function getEntity(entityType, name, callback) {
    var url = urlHelper.getEntityUrl(entityType, name);
    createRequest(url, callback);
}

function getEntityList(entityType, callback) {
    var url = urlHelper.getEntityListUrl(entityType);
    createRequest(url, callback);
}

function search(query, callback) {
    var url = urlHelper.searchUrl(query);
    createRequest(url, callback);
}

function getPosts(entityType, name, firstName, lastName, callback) {
    var url = urlHelper.getPostsUrl(entityType, name, firstName, lastName);
    createRequest(url, callback);
}

function createRequest(url, callback) {
    request(url, function (error, response, body) {

        if (response.statusCode == 200) {
            try {
                callback(error, JSON.parse(body));
            } catch (error) {
                callback(error, body);
            }
        } else {
            callback(error, body);
        }
    });
}

module.exports = {
    init: function(apikey) {
        return init(apikey);
    },

    getEntity: function(entityType, name, callback) {
        return getEntity(entityType, name, callback);
    },

    getEntityList: function(entityType, callback) {
        return getEntityList(entityType, callback);
    },

    search: function(query, callback) {
        return search(query, callback);
    },

    getPosts: function(entityType, name, firstName, lastName, callback) {
        return getPosts(entityType, name, firstName, lastName, callback);
    }
}