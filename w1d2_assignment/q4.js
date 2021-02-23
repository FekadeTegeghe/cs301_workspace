let milesPerGallon;
let beginOdometer = prompt('enter beginning odometer reading');
let endOdometer = prompt('enter ending odometer reading');
let gasUsed = prompt('enter used gas in gallons');
milesPerGallon = (endOdometer - beginOdometer)/gasUsed;
console.log(milesPerGallon);
