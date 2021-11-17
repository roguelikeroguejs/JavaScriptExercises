// Make some practice objects
//add a property
//camera.lens = "Venua Laowa Dreamer Mag2";

//delete a property 
//delete camera.imageMode;

//Various Dice rolls TODO make a diceroller.js file 

function attackRoll (attackMod){
    return rollD20() + attackMod;
 
 }
 
 function damageRoll(diceRoll, damageMod){
     return diceRoll + damageMod;
 
 }
 
 function rollD20 (){
     var diceRollD20 =  Math.floor((Math.random() * 20) +0);
     return diceRollD20;
   
 }
 
 function rollD12 (){
   var diceRollD12 =  Math.floor((Math.random() * 12) +0);
   return diceRollD12;
 
 }
 
 function rollD6 (){
     var diceRollD6 =  Math.floor((Math.random() * 6) +0);
     return diceRollD6;
   
 }

// Object Literal BattleMech ---> Use Object literals <----
var battleMech = {
    mechName: "BattleMech",
    armorClass: 16,
    frontHeadArmor: 20,
    frontArmArmorL: 50,
    frontArmArmorR: 50,
    frontTorsoArmor: 100,
    frontLegArmorL: 40,
    frontLegArmorR: 40,
    rearHeadArmor: 10,
    rearArmArmorL: 30,
    rearArmArmorR: 30,
    rearTorsoArmor: 60,
    rearLegArmorL: 20,
    rearLegArmorR: 20,
    internalHead: 5,
    internalArmL: 8,
    internalArmR: 8,
    internalTorso: 20,
    internalLegL: 10,
    internalLegR: 10,
    topSpeedKm: 65,
    currentSpeedKm: 45,
    isAirborne: false,
    headWeapons: true,
    leftArmWeapons: true,
    rightArmWeapons: true,
    torsoWeapons: false,
    totalArmor: function(){
        return this.frontHeadArmor +
        this.rearHeadArmor + this.frontTorsoArmor +
        this.rearTorsoArmor + this.frontArmArmorL + 
        this.rearArmArmorL + this.frontArmArmorR +
        this.rearArmArmorR + this.frontLegArmorL +
        this.rearLegArmorL + this.frontLegArmorR +
        this.rearLegArmorR;

    },
    totalInternalHP : function(){
        return this.internalHead + this.internalTorso +
        this.internalArmL + this.internalArmR +
        this.internalLegL + this.internalLegR;
    }

         
};

// Constructor for a battleMech, functionally similar but the object literal is simpler 
function Battlemech(mechName,armorClass,frontHeadArmor,frontArmArmorL,frontArmArmorR,frontTorsoArmor,frontLegArmorL,frontLegArmorR,
    rearHeadArmor,rearArmArmorL,rearArmArmorR,rearTorsoArmor,rearLegArmorL,rearLegArmorR,internalHead,internalArmL,internalArmR,
    internalTorso,internalLegL,internalLegR){
        this.mechName = mechName;
        this.armorClass = armorClass;
        this.frontHeadArmor = frontHeadArmor;
        this.frontArmArmorL = frontArmArmorL;
        this.frontArmArmorR = frontArmArmorR;
        this.frontTorsoArmor = frontTorsoArmor;
        this.frontLegArmorL = frontLegArmorL;
        this.frontLegArmorR = frontLegArmorR;
        this.rearHeadArmor = rearHeadArmor;
        this.rearArmArmorL = rearArmArmorL;
        this.rearArmArmorR = rearArmArmorR;
        this.rearTorsoArmor = rearTorsoArmor;
        this.rearLegArmorL = rearLegArmorL;
        this.rearLegArmorR = rearLegArmorR;
        this.internalHead = internalHead;
        this.internalArmL = internalArmL;
        this.internalArmR = internalArmR;
        this.internalTorso = internalTorso;
        this.internalLegL = internalLegL;
        this.internalLegR = internalLegR;
}


// Example Create a Mech class, not neceassary only mimics the syntax of OOP classes, JS does not use Multiple Inheritence 

class Mech {
    constructor(mechName,armorClass,frontHeadArmor,frontArmArmorL,frontArmArmorR,frontTorsoArmor,frontLegArmorL,frontLegArmorR,
        rearHeadArmor,rearArmArmorL,rearArmArmorR,rearTorsoArmor,rearLegArmorL,rearLegArmorR,internalHead,internalArmL,internalArmR,
        internalTorso,internalLegL,internalLegR){
            this.mechName = mechName;
            this.armorClass = armorClass;
            this.frontHeadArmor = frontHeadArmor;
            this.frontArmArmorL = frontArmArmorL;
            this.frontArmArmorR = frontArmArmorR;
            this.frontTorsoArmor = frontTorsoArmor;
            this.frontLegArmorL = frontLegArmorL;
            this.frontLegArmorR = frontLegArmorR;
            this.rearHeadArmor = rearHeadArmor;
            this.rearArmArmorL = rearArmArmorL;
            this.rearArmArmorR = rearArmArmorR;
            this.rearTorsoArmor = rearTorsoArmor;
            this.rearLegArmorL = rearLegArmorL;
            this.rearLegArmorR = rearLegArmorR;
            this.internalHead = internalHead;
            this.internalArmL = internalArmL;
            this.internalArmR = internalArmR;
            this.internalTorso = internalTorso;
            this.internalLegL = internalLegL;
            this.internalLegR = internalLegR;
    }
}

//battleMech.totalArmor = function (){
//    return this.frontHeadArmor +
//    this.rearHeadArmor + this.frontTorsoArmor +
//    this.rearTorsoArmor + this.frontArmArmorL + 
//    this.rearArmArmorL + this.frontArmArmorR +
//    this.rearArmArmorR + this.frontLegArmorL +
//    this.rearLegArmorL + this.frontLegArmorR +
 //   this.rearLegArmorR; 
//};

//battleMech.totalInternalHP = function (){
//    return this.internalHead + this.internalTorso +
//    this.internalArmL + this.internalArmR +
//    this.internalLegL + this.internalLegR;
//};

//document.write("The "+ battleMech.mechName + " has " + battleMech.totalArmor() + " total armor" + "<br><br>");
//document.write("The "+ battleMech.mechName + " has " + battleMech.totalInternalHP() + " total internal hit points" + "<br><br>");

//for (var prop in battleMech){
//    document.write( prop + ": " + battleMech[prop] + "<br><br>" );
//}


  
  


//document.write(damageLocation(rollD6(),0) + "<br>");


//Determine where an attack hits on a mech 

function damageLocation (diceRoll, facing, battleMech, damageRoll){
    var frontLocation = ["front head armor",
            "front arm armor (Left)",
            "front arm armor (Right)",
            "front torso armor",
            "front leg armor (Left)",
            "front leg armor (Right)"];
           
    var rearLocation = ["rear head armor",
            "rear arm armor (Left)",
            "rear arm armor (Right)",
            "rear torso armor",
            "rear leg armor (Left)",
            "rear leg armor (Right)"];

    var internalLocation = ["head internal structure",
            "arm internal struture (Left)",
            "arm internal struture (Right)",
            "torso internal struture",
            "leg internal struture (Right)",
            "leg internal struture (Right)"];
    //in the case of the damage roll exceeding the armor store left over damage to be applied to internal structure
    var carryOverDmg = 0; 
     
    if (facing == 0){

        switch (diceRoll){
            case 0:
                if(battleMech.frontHeadArmor > damageRoll){
                    battleMech.frontHeadArmor -= damageRoll;
                } else{
                    carryOverDmg = damageRoll - battleMech.frontHeadArmor;
                    battleMech.frontHeadArmor = 0;
                    document.write("FRONT HEAD ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalHead > carryOverDmg){
                        battleMech.internalHead -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO COCKPIT!!" + "<br>");

                    }else{
                        battleMech.internalHead = 0;
                        document.write("PILOT HAS BEEN KILLED!!" + "<br>");
                    }
                    
                }
                break;
            case 1:
                if(battleMech.frontArmArmorL > damageRoll){
                    battleMech.frontArmArmorL -= damageRoll;
                } else{
                    carryOverDmg = damageRoll - battleMech.frontArmArmorL;
                    battleMech.frontArmArmorL = 0;
                    document.write("FRONT LEFT ARM ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalArmL > carryOverDmg){
                        battleMech.internalArmL -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO LEFT ARM!!" + "<br>");
                    }else{
                        battleMech.internalArmL = 0;
                        battleMech.leftArmWeapons = false;
                        document.write("LEFT ARM HAS BEEN DESTROYED!!" + "<br>");
                    }

                }
                break;
            case 2:
                if(battleMech.frontArmArmorR > damageRoll){
                    battleMech.frontArmArmorR -= damageRoll;
                }else{
                    carryOverDmg = damageRoll - battleMech.frontArmArmorR;
                    battleMech.frontArmArmorR = 0;
                    document.write("FRONT RIGHT ARM ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalArmR > carryOverDmg){
                        battleMech.internalArmR -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO RIGHT ARM!!" + "<br>");
                    }else{
                        battleMech.internalArmR = 0;
                        battleMech.rightArmWeapons = false;
                        document.write("RIGHT ARM HAS BEEN DESTROYED!!" + "<br>");
                    }

                }
                break;
            case 3:
                if(battleMech.frontTorsoArmor > damageRoll){
                    battleMech.frontTorsoArmor -= damageRoll;
                }else{
                    carryOverDmg = damageRoll - battleMech.frontTorsoArmor;
                    battleMech.frontTorsoArmor = 0;
                    document.write("FRONT TORSO ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalTorso > carryOverDmg){
                        battleMech.internalTorso -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO TORSO!!" + "<br>");
                    }else{
                        battleMech.internalTorso = 0;
                        battleMech.torsoWeapons = false;
                        document.write("CORE CONTAINMENT LEAK DETECTED...NUCLEAR REACTOR EXPLOSION...NO ESCAPE------------" + "<br>");
                    }

                }
                break;
            case 4:
                if(battleMech.frontLegArmorL > damageRoll){
                    battleMech.frontLegArmorL -= damageRoll;
                }else{
                    carryOverDmg = damageRoll - battleMech.frontLegArmorL;
                    battleMech.frontLegArmorL = 0;
                    document.write("FRONT LEFT LEG ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalLegL > carryOverDmg){
                        battleMech.internalLegL -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO LEFT LEG!!" + "<br>");
                    }else{
                        battleMech.internalLegL = 0;
                        battleMech.topSpeedKm = 0;
                        document.write("FRONT LEFT LEG HAS BEEN DESTROYED!!" + "<br>");
                        if(battleMech.internalLegR > 0){
                            document.write("MECH HAS BEEN HOBBLED, BRACE FOR COLLAPSE!!")

                        }else{
                            document.write("MECH HAS BEEN DISABLED. EJECT.")
                        }
                    }

                }
                break;  
            case 5:
                if(battleMech.frontLegArmorR > damageRoll){
                    battleMech.frontLegArmorR -= damageRoll;
                }else{
                    carryOverDmg = damageRoll - battleMech.frontLegArmorR;
                    battleMech.frontLegArmorR = 0;
                    document.write("FRONT RIGHT LEG ARMOR DESTROYED!!" + "<br>");
                    if(battleMech.internalLegR > carryOverDmg){
                        battleMech.internalLegR -= carryOverDmg;
                        document.write("Damage to "+internalLocation[diceRoll]+ " reported. INTERNAL DAMAGE TO RIGHT LEG!!" + "<br>");
                    }else{
                        battleMech.internalLegR = 0;
                        battleMech.topSpeedKm = 0;
                        document.write("FRONT RIGHT LEG HAS BEEN DESTROYED!!" + "<br>");
                        if(battleMech.internalLegL > 0){
                            document.write("MECH HAS BEEN HOBBLED, BRACE FOR COLLAPSE!!")

                        }else{
                            document.write("MECH HAS BEEN DISABLED. EJECT.")
                        }
                    }

                }
                break;  
        }
        
        document.write(" A location roll of " + diceRoll+ " hits the "+frontLocation[diceRoll]+ " of the " +battleMech.mechName+ "<br>");
        return frontLocation[diceRoll];

    } 
    else {
        switch (diceRoll){
            case 0:
                battleMech.rearHeadArmor -= damageRoll;
                break;
            case 1:
                battleMech.rearArmArmorL -= damageRoll;
                break;
            case 2:
                battleMech.rearArmArmorR -= damageRoll;
                break;
            case 3:
                battleMech.rearTorsoArmor -= damageRoll;
                break;
            case 4:
                battleMech.rearLegArmorL -= damageRoll;
                break;  
            case 5:
                battleMech.rearLegArmorR -= damageRoll;
                break; 
        }
        
        document.write(" A location roll of " + diceRoll+ " hits the "+rearLocation[diceRoll]+  " of the " +battleMech.mechName+ "<br>");
        return rearLocation[diceRoll];
   }
   
    
};



// Example Creating a Battlemech object from a constructor, use of new is frowned upon as it can create issues in JS
const Zaku = new Mech("Zaku II",10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);

// Creating a BattleMech Prototype from the battleMech Object Literal
var Gundam = Object.create(battleMech);
Gundam.mechName = "Gundam";


document.write(mechHitModel(Gundam, attackRoll(15), damageRoll(rollD12(),20))+ "<br>");
document.write(damageLocation(0, 0, Gundam, 4) + "<br><br>");

//document.write(mechHitModel(Gundam, attackRoll(6), damageRoll(rollD12(),5))+ "<br>");
//document.write(damageLocation(rollD6(), 0, Gundam, 12) + "<br><br>");
document.write(damageReadout(Gundam));


function damageReadout (battleMech) {
    for (var prop in battleMech){
        document.write( prop + ": " + battleMech[prop] + "<br><br>");
        
    }
    document.write("The "+ battleMech.mechName + " currently has " + battleMech.totalArmor() + " total armor" + "<br><br>");
    document.write("The "+ battleMech.mechName + " currently has " + battleMech.totalInternalHP() + " total internal hit points" + "<br><br>");
    return "=*==Damage Readout Complete==*=";
}


// Determine if an attack hits and calculate raw damage
function mechHitModel (battleMech, attackRoll, damageRoll){
    if (attackRoll >= battleMech.armorClass){
        // TODO add damage location
        // Update armor values
        document.write("An attack was made on the " + battleMech.mechName + " with a roll of " + attackRoll+
        " which beats an armor class of " +battleMech.armorClass + "<br> " +damageRoll + " damage has occured!" + "<br>" );
        return damageRoll; 
        
        
    } else {
        document.write("The attack missed." + "<br>");
        return attackRoll;
    }

    
}
// 



