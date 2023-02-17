// Soldier
class Soldier {
 constructor(health,strength){
  this.health=health;
  this.strength=strength;
 }
 //Attack Method
 attack(){
  return this.strength;

 }
 //Receive Damage Methods
 receiveDamage(damage){
  this.health-=damage
 }
}

// Viking
class Viking extends Soldier {
   constructor(name,health,strength){
    super(health,strength);
    this.name=name;
   }

  receiveDamage(damage){
   this.health-=damage;
   if(this.health>0){
    return `${this.name} has received ${damage} points of damage`
   } else {
    return `${this.name} has died in act of combat`
   }
  } 

  battleCry(){
   return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
 receiveDamage(damage){
  this.health-=damage;
  if(this.health>0){
    return `A Saxon has received ${damage} points of damage`
   } else {
    return `A Saxon has died in combat`
   };

 }
}

// War
class War {
 //we always need to add constructor
constructor(){
 this.vikingArmy = [];
 this.saxonArmy = [];
}
addViking(viking){
this.vikingArmy.push(viking);
};
addSaxon(saxon){
 this.saxonArmy.push(saxon);
};
vikingAttack(){
 //choose randomly saxon
 let chooseSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
 //choose randomly viking
 let chooseViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
 //Saxon damage = viking strength
 let damage = chooseViking.strength;
 chooseSaxon.receiveDamage(damage);
 if(chooseSaxon.health < 1){
  const index = this.saxonArmy.indexOf(chooseSaxon);
  this.saxonArmy.splice(index,1);
  return 'A Saxon has died in combat';
 }
};
saxonAttack(){
 //choose randomly saxon
 let chooseSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
 //choose randomly viking
 let chooseViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
 //Saxon damage = viking strength
 let damage = chooseSaxon.strength;
 chooseViking.receiveDamage(damage);
 if(chooseViking.health < 1){
  const index = this.vikingArmy.indexOf(chooseViking);
  this.vikingArmy.splice(index,1);
  //let saxonMessage = `${chooseViking.name} has received ${chooseSaxon.strength} points of damage`;
  
  //return `${chooseViking.name} has died in act of combat`;
  // return `${chooseViking.name} has received ${chooseSaxon.strength} points of damage`;
 }
}
showStatus(){};

}
