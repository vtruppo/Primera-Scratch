(function() {
    function mobileMenuAnimation () {
        //MOBILE MENU
        $("#header-menu").click(function() {
            $(".header-nav ul").toggleClass("menu-links-open");
        })
    }

    function counter () {
        //COUNTER
        var clock;
        $(document).ready(function() {
            // Grab the current date
            var currentDate = new Date();
            // Set some date in the future. In this case, it's always Jan 1
            var futureDate  = new Date(2018, 3, 1);
            // Calculate the difference in seconds between the future and current date
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            // Instantiate a coutdown FlipClock
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'DailyCounter',
                countdown: true,
                language: 'nl'
            });
        });
    }

    mobileMenuAnimation();
    counter();

})();