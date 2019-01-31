// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 25.042676, lng: 121.591900 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrooling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !=='') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});