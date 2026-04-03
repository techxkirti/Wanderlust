maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
    container: 'map', // ID of the div in your ejs file
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates, // [lng, lat] from your database
    zoom: 8,
    projection: 'globe',
    space: { 
        preset: 'milkyway-bright', // Options: 'stars', 'milkyway', 'milkyway-bright'
    },
    halo: {
      color: 'rgba(255, 255, 255, 0.4)', // Soft white/blue glow
      scale: 1.2, // Makes the glow slightly larger than the globe
      stops: [
        { offset: 0, color: '#ffffff' }, // Brightest at the edge
        { offset: 0.5, color: '#00ccff' }, // Fades into a light blue
        { offset: 1, color: 'transparent' } // Disappears into space
      ]
    }
});

// 1. Create the Popup but DO NOT attach it to the marker yet
const popup = new maptilersdk.Popup({
    offset: 25,
    closeButton: false, // Cleaner for hover
    closeOnClick: false
})
.setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking.</p>`);

// 2. Create the Marker
const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .addTo(map);

// 3. Get the marker's HTML element
const markerElement = marker.getElement();

// 4. ADD HOVER LISTENERS
markerElement.addEventListener('mouseenter', () => {
    // Manually add the popup to the map at the marker's location
    popup.setLngLat(listing.geometry.coordinates).addTo(map);
});

markerElement.addEventListener('mouseleave', () => {
    // Remove the popup when the mouse leaves
    popup.remove();
});
