var crunchbase = require('../index');

module.exports = {
    setUp: function (callback) {
        // Init the crunchbase object
        crunchbase.init('twkhedbs48ubvqwjh8kvn7mc');
        callback();
    },

    tearDown: function (callback) {
        callback();
    },

    testGetEntity: function(test) {
        test.expect(3);

        // Get the NFL schedule for week 1
        crunchbase.getEntity('company', 'dropbox', function(err, entity) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(entity !== null, 'Entity is null! ' + entity);
            test.ok(entity.name === 'Dropbox', 'Name is incorrect! ' + entity.name);
            test.done();
        });
    },

    testGetEntityList: function(test) {
        test.expect(3);

        // Get the NFL schedule for week 1
        crunchbase.getEntityList('financial-organizations', function(err, entityList) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(entityList !== null, 'EntityList is null! ' + entityList);
            test.ok(entityList.length > 0, 'EntityList is empty! ' + entityList);
            test.done();
        });
    },

    testSearch: function(test) {
        test.expect(3);

        // Get the NFL schedule for week 1
        crunchbase.search('xobni', function(err, results) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(results !== null, 'Results are null! ' + results);
            test.ok(results.results.length > 0, 'Results are empty! ' + results);
            test.done();
        });
    },

    testGetPosts: function(test) {
        test.expect(2);

        // Get the NFL schedule for week 1
        crunchbase.getPosts('companies', 'dropbox', 'drew', 'houston', function(err, posts) {
            test.ok(err === null, 'Error is not null! ' + err);
            test.ok(posts !== null, 'Posts are null! ' + posts);
            test.done();
        });
    }
};