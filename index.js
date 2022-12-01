const currentUser = 'Ann'
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`
console.log(welcomeMessage);
const excitedWelcomeMessage = welcomeMessage.toUpperCase()
console.log(excitedWelcomeMessage);
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${firstInitial}!`