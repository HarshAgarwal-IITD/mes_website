const fs = require('fs');

const databaseFile = 'events.json';

// Function to load events from the database file
function loadEvents() {
    try {
        const data = fs.readFileSync(databaseFile);
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
}

// Function to save events to the database file
function saveEvents(events) {
    fs.writeFileSync(databaseFile, JSON.stringify(events, null, 4));
}

// Function to add a new event
function addEvent(eventId, name, description, posterUrl, galleryImages) {
    const events = loadEvents();
    events[eventId] = {
        name: name,
        description: description,
        posterUrl: posterUrl,
        galleryImages: galleryImages
    };
    saveEvents(events);
}

// Function to retrieve an event by its ID
function getEvent(eventId) {
    const events = loadEvents();
    return events[eventId];
}

// Example usage
// addEvent('1', 'Example Event', 'This is an example event description.', 'https://example.com/poster.jpg', ['https://example.com/gallery/image1.jpg', 'https://example.com/gallery/image2.jpg']);

// const event = getEvent('1');
// if (event) {
//     console.log("Event Found:");
//     console.log("Name:", event.name);
//     console.log("Description:", event.description);
//     console.log("Poster URL:", event.posterUrl);
//     console.log("Gallery Images:", event.galleryImages);
// } else {
//     console.log("Event not found.");
// }