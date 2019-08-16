/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('should be defined and not empty', function () {
            //the allfeeds variable has been defined
            expect(allFeeds).toBeDefined();
            //ensure that the variable is not empty
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds.length).not.toBe(null);
            expect(allFeeds.length).not.toBe('');
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        describe('The URL', function () {

            it('should be defined', function () {
                //here we ensure the url is defined
                for (feed of allFeeds) {
                    expect(feed.url).toBeDefined();
                }
            });

            it('should not be empty', function () {
                //here we ensure the feeds are not empty
                for (feed of allFeeds) {
                    expect(feed.name).not.toBe(0);
                    expect(feed.name).not.toBe(null);
                    expect(feed.name).not.toBe('');
                }
            });


        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        describe('Name', function () {

            it('should be defined', function () {
                //here we ensure that the feed name is defined and not empty
                for (feed of allFeeds) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name).not.toBe(0);
                    expect(feed.name).not.toBe(null);
                    expect(feed.name).not.toBe('');
                }
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should be hidden by default', function () {
            //the body should have a class of menu-hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('should toggle the class menu-hidden', function () {
            //trigger the click function
            $('.menu-icon-link').trigger('click');
            //check to see if the body has a class of menu hidden
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //trigger the click function
            $('.menu-icon-link').trigger('click');
            //check to see if the body has a class of menu hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });



    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            //load content to the feed element
            loadFeed(0, function () {
                done();
            });
        });

        it('should have at least one entry', function () {
            //ensure that there is at least one link added to the feed element
            expect($('.entry-link').length).toBeGreaterThan(0);
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //declare variables to store asychronous data
        let initial;
        let second;

        beforeEach(function (done) {
            //ensure the feed element is empty
            $('.feed').empty();
            //load feed 1
            loadFeed(1, function () {
                //save first link host to variable
                initial = $('.entry-link')[0].host;
                //load feed 2
                loadFeed(2, function () {
                    //save second link host to variable
                    second = $('.entry-link')[0].host;
                    //finish asynchronous work
                    done();
                });
            });

        });

        it('host Urls for conent on the page should not match', function () {
            //ensure the urls that came directly from DOM content are not the same
            expect(initial).not.toBe(second);
        })

    });

}());
