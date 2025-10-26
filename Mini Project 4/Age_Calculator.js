const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your date of birth (dd-mm-yyyy): ", (dob) => {
    // Split input safely
    const [day, month, year] = dob.split("-").map(Number);
    if (!day || !month || !year) {
        console.log("Invalid date format! Please use dd-mm-yyyy.");
        readline.close();
        return;
    }

    const birthDate = new Date(year, month - 1, day); // JS months are 0-indexed
    const currentDate = new Date();

    // Calculate years
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    const dayOfWeek = birthDate.toLocaleDateString("en-US", { weekday: 'long' });

    console.log(`You are ${years} years, ${months} months, and ${days} days old.`);
    console.log(`You were born on a ${dayOfWeek}.`);

    readline.close();
});
