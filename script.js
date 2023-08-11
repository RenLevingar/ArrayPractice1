// Objective 1
class Monster {
    constructor(name, location, rating, weakness, strength, color) {
      this.name = name;
      this.location = location;
      this.rating = rating;
      this.weakness = weakness;
      this.strength = strength;
      this.color = color;

      Monster.addToRegistry(this);
    }

    static monsters = [];

    static addToRegistry(monster) {
      Monster.monsters.push(monster);
    }

    logger(){
      console.log(`Name: ${this.name}`);
      console.log(`Location: ${this.location}`);
      console.log(`Rating: ${this.rating}`);
      console.log(`Weakness: ${this.weakness}`);
      console.log(`Strength: ${this.strength}`);
      console.log(`Color: ${this.color}`);
    }

    static aphabetical() {
      let sortedNames = Monster.monsters.map(monster => monster.name).sort();
      console.log("Alphabetical Monster Names:", sortedNames.join(", "));
    }

    static oneStat(monsterName){
      let oneName = Monster.monsters.find(monster => monster.name === monsterName);
      oneName.logger();
    }

    static statUpdate(monsterName, statName, newValue) {
      const monster = Monster.monsters.find(monster => monster.name === monsterName);
      if (monster) {
        if (statName in monster) {
          monster[statName] = newValue;
          console.log(`${statName} for ${monster.name} updated to ${newValue}.`);
        } else {
          console.log(`Invalid stat '${statName}' for ${monster.name}.`);
        }
      } else {
        console.log(`Monster '${monsterName}' not found.`);
      }
    }

  }



// Objective 2
class Ghosts extends Monster{
  constructor(name, location, rating, weakness, strength, color, type, signs){
    super(name, location, rating, weakness, strength, color);
    this.type = "unknown";
    this.signs = [];
  }

  newSign(...sign) {
    this.signs.push(...sign);
  }

  ghostType(gType){
    this.type = gType;
  }

  logger(){
    super.logger();
    console.log(`Type: ${this.type}`);
    console.log(`Signs: ${this.signs.join(', ')}`);
  }
}
let nyx = new Ghosts("Nyx", "40°42’02.7”N 75°52’00.2”W", 10, "light", "intangible", "none")
nyx.newSign("D.O.T.S Projector", " EMF Level 5", " Spirit Box")
nyx.ghostType("wraith");

let sorcha = new Ghosts("Sorcah","40°42’02.7”N 75°52’00.2”W", 7, "light", "intangible", "white")
sorcha.newSign("D.O.T.S Projector"," Ghost Orb", " Fingerprints");
sorcha.ghostType("banshee");

let shade = new Ghosts("Shade","40°42’02.7”N 75°52’00.2”W", 2, "light", "intangible", "white")
shade.newSign("D.O.T.S Projector", " EMF Level 5", " Spirit Box");
sorcha.ghostType("wraith");



// Objective 3
class Beasts extends Monster{
  constructor(name, location, rating, weakness, strength, color, habitat, defense){
    super(name, location, rating, weakness, strength, color);
    this.habitat = "unknown";
    this.defense = [];
  }

  habitatName(habName){
    this.habitat = habName;
  }

  defensives(...formOfDefense){
    this.defense.push(...formOfDefense);
  }

  logger(){
    super.logger();
    console.log(`Habitat: ${this.habitat}`);
    console.log(`Defense: ${this.defense}`);
  }
}
let lochness = new Beasts ("Lochness", "40°42’02.7”N 75°52’00.2”W",9, "sharp objects","water","blue");
lochness.habitatName("lake");
lochness.defensives("slimy"," water"," blends in");

let basilisk = new Beasts("Basilisk", "40°42’02.7”N 75°52’00.2”W",5, "none","gaze","green");
basilisk.habitatName("cave");
basilisk.defensives("fast"," pousionous");

let werewolf = new Beasts("Werewolf", "40°42’02.7”N 75°52’00.2”W",8, "silver","strong and fast","grey");
werewolf.habitatName("forest");
werewolf.defensives("mysterious"," quiet");


// Objective 4
class Humanoid extends Monster{
  constructor(name, location, rating, weakness, strength, color, humanness, compliance){
    super(name, location, rating, weakness, strength, color);
    this.humanness;
    this.compliance;
  }

  humanLevel(humanLook){
    this.humanness = humanLook;
  }

  complianceLev(comp){
    this.compliance = comp;
  }

  logger(){
    super.logger();
    console.log(`Humanness: ${this.humanness}`);
    console.log(`Compliance: ${this.compliance}`);
  }
}
let unknown = new Humanoid("unknown", "40°42’02.7”N 75°52’00.2”W",10, "unkown","strong","red"); //this is the one that was listed in the assignment as an example
unknown.humanLevel(8);
unknown.complianceLev("hostile");

let bigfoot = new Humanoid("Bigfoot", "40°42’02.7”N 75°52’00.2”W",7, "fire","strong","brown")
bigfoot.humanLevel(6);
bigfoot.complianceLev("neutral");

let jason = new Humanoid("Jason", "40°42’02.7”N 75°52’00.2”W",10, "none","strong","blue")
jason.humanLevel(10);
jason.complianceLev("hostile");

console.log(Monster.monsters)
Monster.aphabetical();
Monster.statUpdate("Jason","color", "red");
Monster.oneStat("Jason");