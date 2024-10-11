const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const deathYear = person.yearOfDeath || currentYear; // Use current year if alive
        const age = deathYear - person.yearOfBirth;

        // Compare ages to find the oldest
        return age > (oldest.age || 0) ? { ...person, age } : oldest;
    },0);
};

// Do not edit below this line
module.exports = findTheOldest;
