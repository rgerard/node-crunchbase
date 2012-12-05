var config = require('../config');

function getEntityUrl(entityType, name) {

    // URL should look like: http://api.crunchbase.com/v/1/Entity/Name.js
    return 'http://api.crunchbase.com/v/1/'
        + encodeURIComponent(entityType)
        + '/'
        + encodeURIComponent(name)
        + '.js?api_key='
        + config.apikey;
}

function getEntityListUrl(entityType) {

    // URL should look like: http://api.crunchbase.com/v/1/Entity-Type.js
    return 'http://api.crunchbase.com/v/1/'
        + entityType
        + '.js?api_key='
        + config.apikey;
}

function searchUrl(query) {

    // URL should look like: http://api.crunchbase.com/v/1/search.js
    return 'http://api.crunchbase.com/v/1/search.js?query='
        + encodeURIComponent(query)
        + '&api_key='
        + config.apikey;
}

function getPostsUrl(entityType, name, firstName, lastName) {

    // URL should look like: http://api.crunchbase.com/v/1/companies/posts?name=NAME&first_name=FIRST_NAME&last_name=LAST_NAME&api_key=XXXX
    return 'http://api.crunchbase.com/v/1/'
        + entityType
        + '/posts?name='
        + encodeURIComponent(name)
        + '&first_name='
        + encodeURIComponent(firstName)
        + '&last_name='
        + encodeURIComponent(lastName)
        + '&api_key='
        + config.apikey;
}

module.exports = {

    getEntityUrl: function(entityType, name) {
        return getEntityUrl(entityType, name);
    },
    getEntityListUrl: function(entityType) {
        return getEntityListUrl(entityType);
    },
    searchUrl: function(query) {
        return searchUrl(query);
    },
    getPostsUrl: function(entityType, name, firstName, lastName) {
        return getPostsUrl(entityType, name, firstName, lastName);
    }
}