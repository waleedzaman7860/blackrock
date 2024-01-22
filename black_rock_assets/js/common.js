$(document).ready(function() {
            var owl = $("#company_slider");
            owl.owlCarousel({
                itemsCustom: [
                    [0, 2],
                    [450, 3],
                    [600, 4],
                    [700, 6],
                    [1000, 6],
                    [1200, 8],
                    [1400, 8],
                    [1600, 8]
                ],
                navigation: true,
                autoPlay: 4000,
                rtl: true
            });
        });







