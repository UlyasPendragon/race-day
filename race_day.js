let raceNumber = Math.floor(Math.random() * 1000);

earlyRegistration = false
age = 11

if (earlyRegistration === true && age > 18 ) {
    raceNumber += 1000;
}

if (earlyRegistration === true && age > 18) {
    console.log(`You will Race at 9:30 am. and your Race nmber is ${raceNumber}`)
} else if (earlyRegistration === false && age > 18) {
    console.log(`You will Race at 11:00 am. and your Race nmber is ${raceNumber}`)
} else if (age < 18) {
    console.log(`You will Race at 12:30 am. and your Race nmber is ${raceNumber}`)
} else {
    console.log('Please see the registration desk')
}