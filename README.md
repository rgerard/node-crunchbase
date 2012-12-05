# node-crunchbase: Easy wrapper around the CrunchBase API

This module is designed to be an easy-to-use wrapper around the CrunchBase API.  This module is designed to be used with node.js, but could be modified to be used directly in the browser as well.

## Install

<pre>
  npm install crunchbase
</pre>

Or from source:

<pre>
  git clone git://github.com/rgerard/node-crunchbase.git
  cd node-crunchbase
  npm install
</pre>


## Simple Examples

```javascript
var crunchbase = require('crunchbase');

// Init the object with your API key
crunchbase.init(apikey);

// Search for a company name
crunchbase.search('pickmoto', function(error, results) {
 if (!error) {
    console.log(results) // Print the search results
  }
});
```


## Test

I have written unit tests for these API calls using the <a href="https://github.com/caolan/nodeunit">nodeunit</a> framework.
The unit tests make actual API calls, so be wary of your API call limit.

To run the unit tests:

```
nodeunit test/
```


## Documentation

Please refer to the <a href="http://developer.crunchbase.com/io-docs">CrunchBase API documentation</a> for more detail on their API.

* [init](#init)
* [getEntity](#getEntity)
* [getEntityList](#getEntityList)
* [search](#search)
* [getPosts](#getPosts)


## CrunchBase API

<a name="init" />
### init(apikey)

Inits the object with your API data, including your API key.

__Arguments__

* apikey - Your API key

__Example__

```js
// Fetch the schedule for Week 1 of the NFL season
var crunchbase = require('crunchbase');
crunchbase.init(apikey);
```

---------------------------------------

<a name="getEntity" />
### getEntity(entityType, name, callback)

Returns information about the entity as a JSON object

__Arguments__

* entityType - Can be either company, person, financial-organization, product, or service-provider
* name - The entity name to search for
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch information about Dropbox
crunchbase.getEntity('company', 'dropbox', function(error, entityInfo) {
 if (!error) {
    console.log(entityInfo);
  }
});
```

---------------------------------------

<a name="getEntityList" />
### getEntityList(entityType, callback)

Returns every entity of a certain type in the system as a JSON object

__Arguments__

* entityType - Can be either companies, people, financial-organizations, products, or service-providers
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch every company in the system
crunchbase.getEntityList('company', function(error, allCompanies) {
 if (!error) {
    console.log(allCompanies);
  }
});
```

---------------------------------------

<a name="search" />
### search(query, callback)

Returns search results as a JSON object

__Arguments__

* query - Parameter to search on
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Search for the company Xobni
crunchbase.search('xobni', function(error, xobniData) {
 if (!error) {
    console.log(xobniData);
  }
});
```

---------------------------------------

<a name="getPosts" />
### getPosts(entityType, name, firstName, lastName, callback)

Returns the posts of a person in an entity as a JSON object

__Arguments__

* entityType - Can be either companies, people, financial-organizations, products
* name - The entity name
* firstName - The person's first name
* lastName - The person's last name
* callback(err, body) - A callback which is called after the API call has returned, or an error has occurred.

__Example__

```js
// Fetch the posts for a company/person
crunchbase.getPosts('companies', 'dropbox', 'drew', 'houston', function(error, postsData) {
 if (!error) {
    console.log(postsData);
  }
});
```