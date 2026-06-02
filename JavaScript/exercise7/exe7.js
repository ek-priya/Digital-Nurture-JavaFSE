const events = [
    "Coding Workshop",
    "Music Festival",
    "Food Carnival"
];

const eventList =
document.getElementById("eventList");

events.forEach(event=>{

    const p =
    document.createElement("p");

    p.textContent = event;

    eventList.appendChild(p);

});