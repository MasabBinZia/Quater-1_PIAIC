// Task: Create an Array Manipulation Program.
let videogames = ["Csgco", "ApexLegends", "Valorant", "GodofWar", "AssetoCorsa"];
console.log("Original array:", videogames);
videogames.push("Fortnite");
console.log("Array after appending 'Fortnite':", videogames);
videogames.splice(0, 0, "Pubg");
console.log("Array after prepending 'Pubg':", videogames);
const fpsGames = videogames.splice(0, 3, "Witcher 3");
console.log("Array after replacing first three elements with 'Witcher 3':", videogames);
console.log("FPS Games:", fpsGames);
