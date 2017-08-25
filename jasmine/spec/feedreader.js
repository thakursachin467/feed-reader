/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); //check wether all feeds is defined or not
            expect(allFeeds.length).not.toBe(0); //check wether all feeds contain some value or not
        });
         });


        describe('URL ',function() {
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('are defined',function() {

            for(var i=0;i<allFeeds.length;i++) //this loop is used to iterate through all feeds 
            {
            expect(allFeeds[i].url).toBeDefined(); //here it checks wether the all feeds has url define at all its position 
            expect(allFeeds[i].url.length).not.toBe(0); //here it checks wether all feeds url has some value by comparing it not to be(0) also !=0 in simple language
          
            }
         });
         });


       describe('name ',function(){

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('are defined',function()
         {
        for(var i=0;i<allFeeds.length;i++)  //this loop is used to iterate through all feeds 
            {
                expect(allFeeds[i].name).toBeDefined();  //here it checks wether the all feeds has name define at all its position 
                expect(allFeeds[i].name).not.toBe(0);   //here it checks wether all feeds name has some value by comparing it not to be(0) also !=0 in simple language

            }
         });
   

});

       describe('The menu',function(){

    /* TODO: Write a new test suite named "The menu" */
            
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden',function(){
                var menu=document.getElementsByClassName('menu-hidden'); //here we use getelementsbyclassname to get the element of menu-hidden into menu
            expect(menu).toBeTruthy(); //now if menu-hidden is present it means that the menu is hidden


        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('MENU CHANGES visibility',function() { //to check wether menu change actually happen we  have to click the menu icon bar and see the menu hidden property behaviour
            $('.menu-icon-link').trigger('click');  //here we trigger the click function it opens the nav bar
            expect($('body').hasClass('menu-hidden')).toBeFalsy(); //now if the nav bar is open then menu-hidden should not be present

            $('.menu-icon-link').trigger('click');  //now again the trigger function will be called and the menu bar will be closed 
            expect($('body').hasClass('menu-hidden')).toBeTruthy();  //now due to above click function the class should now be hidden 
                //now for the menu changes to be visible both the expect condition should pass then only this test case  will be passed

          });



});
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries',function(){

      beforeEach(function(){
        loadFeed(0,function(){ //now here we call the loadfeed with parameter 0 i.e first feed udacity blog
            done();   //here it passes the control 
        });

        
      });
      it('it has atleast one entry',function(){
        expect($('.feed').length).not.toBe(0); //now here we check wether the length of feed is 0 or greater now as loadfeed loaded 0 i.e udacity blog so here the value of feed.length will be 1
                        //now as the feed.length is 1 and it is not equal to 0 so this test case is pased in case there was no feed i.e nothing waspresent at 0 so this test case would have failed
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */



  });
});

    describe('new feed Selection',function(){
        var element1; //here we declare element1 becasuse it will be used globally and not only in beforeEach
        beforeEach(function(){
            loadFeed(0,function() {

               element1 =$(".feed").html();   //here we get the html content of loadfeed 0 i.e udacity blog into element1
               
                });
            loadFeed(1,function(){ //here we load the another feed i.e 1 which is css tricks. we could have given any number 1,2,3 
                done();  //pass the control forward

            });
            
       
        });

        it('content changed to next feed',function() {
               var element2 = $(".feed").html(); //now as in beforeEach loadFeed(1 we loaded css tricks here we are loading all css tricks into element2 
                expect(element1).not.toBe(element2); 
                //now as want to see wether new feed is loaded or not we can do so by comparing the element1 which contain udacity blog and element2 which contain css tricks if they are different it means new feed is loaded
            }); 
        


        });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

  
}());
