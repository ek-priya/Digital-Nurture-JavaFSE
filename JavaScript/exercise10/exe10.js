const event = {

    name:"Workshop",
    seats:50

};

const {name,seats} = event;

console.log(name);
console.log(seats);

const eventNames = [
    "Coding",
    "Music"
];

const copiedEvents = [
    ...eventNames
];