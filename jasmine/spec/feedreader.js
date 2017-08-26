$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //check wether all feeds is defined or not
            expect(allFeeds.length).not.toBe(0); //check wether all feeds contain some value or not
        });
    });


    describe('URL ', function() {
        it('are defined', function() {

            for (var i = 0; i < allFeeds.length; i++) //this loop is used to iterate through all feeds 
            {
                expect(allFeeds[i].url).toBeDefined(); //here it checks wether the all feeds has url define at all its position 
                expect(allFeeds[i].url.length).not.toBe(0); //here it checks wether all feeds url has some value by comparing it not to be(0) also !=0 in simple language

            }
        });
    });


    describe('name ', function() {
        it('are defined', function() {
            for (var i = 0; i < allFeeds.length; i++) //this loop is used to iterate through all feeds 
            {
                expect(allFeeds[i].name).toBeDefined(); //here it checks wether the all feeds has name define at all its position 
                expect(allFeeds[i].name.length).not.toBe(0); //here it checks wether all feeds name has some value by comparing it not to be(0) also !=0 in simple language

            }
        });


    });

    describe('The menu', function() {
        it('is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); //now if the nav bar is hidden because the body contains classmenu-hidden

        });
        it('MENU CHANGES visibility', function() { //to check wether menu change actually happen we  have to click the menu icon bar and see the menu hidden property behaviour
            $('.menu-icon-link').trigger('click'); //here we trigger the click function it opens the nav bar
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); //now if the nav bar is open then menu-hidden should not be present

            $('.menu-icon-link').trigger('click'); //now again the trigger function will be called and the menu bar will be closed 
            expect($('body').hasClass('menu-hidden')).toBeTruthy(); //now due to above click function the class should now be hidden 
            //now for the menu changes to be visible both the expect condition should pass then only this test case  will be passed

        });



    });
    /*  Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        var number, len;
        beforeEach(function(done) {
            loadFeed(0, function() {
                number = document.querySelectorAll('.feed .entry');
                len = number.length;
            });
            setTimeout(function() {
                console.log('inside timeout');
                done();
            }, 500);

        });




        it('it has atleast one entry', function() {

            expect(len).not.toBe(0); //now here we check wether the length of feed is 0 or greater now as loadfeed loaded 0 i.e udacity blog so here the value of feed.length will be 1
            //now as the feed.length is 1 and it is not equal to 0 so this test case is pased in case there was no feed i.e nothing waspresent at 0 so this test case would have failed
        });
    });

    describe('new feed Selection', function() {
        var element1, element2; //here we declare element1 becasuse it will be used globally and not only in beforeEach
        beforeEach(function(done) {
            loadFeed(0, function() {
                element1 = document.querySelector(".feed").text(); //here we get the html content of loadfeed 0 i.e udacity blog into element1
                loadFeed(1, function() {
                    element2 =document.querySelector(".feed").text(); //here we load the another feed i.e 1 which is css tricks. we could have given any number 1,2,3 
                    done(); //pass the control forward
                });
            });
        });

        it('content changed to next feed', function() {
            //now as in beforeEach loadFeed(1 we loaded css tricks here we are loading all css tricks into element2 
            expect(element1).not.toBe(element2);
            //now as want to see wether new feed is loaded or not we can do so by comparing the element1 which contain udacity blog and element2 which contain css tricks if they are different it means new feed is loaded
        });



    });


}());