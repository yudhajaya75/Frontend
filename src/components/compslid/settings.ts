export { };

var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 1,
                dots: true
            }
        },
        {
            breakpoint: 440,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "20px",
                slidesToShow: 1,
                dots: true
            }
        }
    ]
};