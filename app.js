
let hero = [{
  isaac: {
    charImg: 'resources/characters/hero/Isaac_lBlade_Front.gif',
    icon: 'resources/characters/hero/hero-icons/Isaac.gif',
    name: 'Isaac'
  },
  mia: {
    charImg: 'resources/characters/hero/Mia_Mace_Front.gif',
    icon: 'resources/characters/hero/hero-icons/Mia.gif',
    name: 'Mia'
  }
}]

let resources = [{
  slimes: {
    count: 0,
    icon: 'resources/resource-icons/Potion.gif'
  },
  gold: {
    count: 0,
    icon: 'resources/resource-icons/Potion.gif'
  },
  health: {
    count: 0,
    icon: 'resources/resource-icons/Water_of_Life.gif'
  },
  monsterHeads: {
    count: 0,
    icon: 'resources/resource-icons/Flame_Shield.gif'
  }
}]

//#region ANCHOR Slots
let weapons = [{ 
  base: [{
    rustySword: {
      name: 'Rusty Sword',
      description: 'You found it on the ground',
      level: 0,
      unique: true,
      icon: 'resources/items/weapons/Rusty_Sword.gif',
      slimeCost: 0
    }
  }],
  levelOne: [{
    broadAxe: {
      name: 'Broad Axe',
      description: 'A wide axe that helps with killing Slimes',
      level: 1,
      slimeMultiplier: 2,
      unique: false,
      icon: 'resources/items/weapons/Broad_Axe.gif',
      slimeCost: 5
    },
    witchsWand: {
      name: 'Witchs Wand',
      description: 'A crooked wand that helps with killing Monsters',
      level: 1,
      goldMultiplier: 2,
      unique: true,
      icon: 'resources/items/weapons/Witchs_Wand.gif',
      slimeCost: 5
    }
  }],
  levelTwo: [{
    silverBlade: {
      name: 'Silver Blade',
      description: 'A sword made with silver that helps with killing Slimes',
      level: 2,
      slimeMultiplier: 3,
      unique: false,
      icon: 'resources/items/weapons/Silver_Blade.gif',
      slimeCost: 10
    },
    blessedMace: {
      name: 'Blessed Mace',
      description: 'A divinely blessed mace that helps with killing Monsters',
      level: 2,
      goldMultiplier: 3,
      unique: true,
      icon: 'resources/items/weapons/Blessed_Mace.gif',
      slimeCost: 10
    }
  }],
  levelThree: [{
    psynergyRod: {
      name: 'Psynergy Rod',
      description: 'A strange magical rod that helps with killing Slimes',
      level: 3,
      slimeMultiplier: 4,
      unique: false,
      icon: 'resources/items/weapons/Psynergy_Rod.gif',
      slimeCost: 15
    },
    muramasa: {
      name: 'Muramasa',
      description: 'A blade forged in blood that helps with killing Monsters',
      level: 3,
      goldMultiplier: 4,
      unique: true,
      icon: 'resources/items/weapons/Witchs_Wand.gif',
      slimeCost: 15
    }
  }],
  levelFour: [{
    gaiaBlade: {
      name: 'Gaia Blade',
      description: 'Decimate your foes with this blade forged from a falling star',
      level: 4,
      slimeMultiplier: 5,
      goldMultiplier: 5,
      unique: true,
      icon: 'resources/items/weapons/Gaia_Blade.gif',
      slimeCost: 30,
      goldCost: 30
    }
  }]
}]

let special = [{ 
  levelOne: [{
      fujinShield: {
        name: 'Fujin Shield',
        description: 'A simple but strong shield that protects a little from both Slimes and Monsters',
        level: 1,
        blockBeast: .5,
        blockUndead: .5,
        unique: false,
        icon: 'resources/items/special/Fujin_Shield.gif',
        slimeCost: 5
      },
      venusDjinn: {
        name: 'Venus Djinn',
        label: 'Flint',
        description: 'Strike a blow that can cleave stone',
        level: 1,
        summonAdd: 1,
        unique: true,
        use: 'venus',
        icon: 'resources/items/djinn/djinn-icons/Venus.gif',
        ready: 'resources/items/djinn/djinn-ready/Venus_Djinn.gif',
        used: 'resources/items/djinn/djinn-used/Venus_Djinn_Sit.gif',
        slimeCost: 5
      }
  }],
  levelTwo: [{
      knightsHelm: {
        name: 'Knights Helm',
        description: 'A sturdy helmet that protects from both Slimes and Monsters',
        level: 2,
        blockBeast: 1,
        blockUndead: 1,
        unique: false,
        icon: 'resources/items/special/Knights_Helm.gif',
        slimeCost: 10
      },
      mercuryDjinn: {
        name: 'Mercury Djinn',
        label: 'Mist',
        description: 'Restore party HP with soothing mist',
        level: 2,
        summonAdd: 1,
        unique: true,
        use: 'mercury',
        icon: 'resources/items/djinn/djinn-icons/Mercury.gif',
        ready: 'resources/items/djinn/djinn-ready/Mercury_Djinn.gif',
        used: 'resources/items/djinn/djinn-used/Mercury_Djinn_Sit.gif',
        slimeCost: 10
      }
  }],
  levelThree: [{
      starDust: {
        name: 'Star Dust',
        description: 'Rare metal from space',
        level: 3,
        healthBoost: 10,
        useTime: 10,
        unique: false,
        icon: 'resources/items/special/Star_Dust.gif',
        slimeCost: 15
      },
      marsDjinn: {
        name: 'Mars Djinn',
        label: 'Scorch',
        description: 'Stun a foe with a blast attack',
        level: 3,
        blockBeast: 10,
        blockUndead: 10,
        summonAdd: 1,
        unique: true,
        use: 'mars',
        icon: 'resources/items/djinn/djinn-icons/Mars.gif',
        ready: 'resources/items/djinn/djinn-ready/Mars_Djinn.gif',
        used: 'resources/items/djinn/djinn-used/Mars_Djinn_Sit.gif',
        slimeCost: 15
      }
  }],
  levelFour: [{
      jupiterDjinn: {
        name: 'Jupiter Djinn',
        label: 'Gust',
        description: 'Attack with mighty wind gusts',
        level: 4,
        summonAdd: 1,
        unique: true,
        use: 'jupiter',
        icon: 'resources/items/djinn/djinn-icons/Jupiter.gif',
        ready: 'resources/items/djinn/djinn-ready/Jupiter_Djinn.gif',
        used: 'resources/items/djinn/djinn-used/Jupiter_Djinn_Sit.gif',
        slimeCost: 30,
        goldCost: 30
      }
  }]
}]

let armor = [{ 
  levelOne: [{
      furCoat: {
        name: 'Fur Coat',
        description: 'Too hot in the summer, just right in the winter. Blocks Beasts a little',
        level: 1,
        blockBeast: 1,
        unique: false,
        icon: 'resources/items/armor/Fur_Coat.gif',
        slimeCost: 5
      },
      adeptsClothes: {
        name: 'Adepts Clothes',
        description: 'Breezy and light. Blocks Undead a little',
        level: 1,
        blockUndead: 1,
        unique: true,
        icon: 'resources/items/armor/Adepts_Clothes.gif',
        slimeCost: 5
      },
  }],
  levelTwo: [{
      chainMail: {
        name: 'Chain Mail',
        description: 'Heavy, but moveable. Blocks Beasts somewhat',
        level: 2,
        blockBeast: 2,
        unique: false,
        icon: 'resources/items/armor/Chain_Mail.gif',
        slimeCost: 10
      },
      elvenShirt: {
        name: 'Elven Shirt',
        description: 'Silky and snappy. Blocks Undead somewhat',
        level: 2,
        blockUndead: 2,
        unique: true,
        icon: 'resources/items/armor/Elven_Shirt.gif',
        slimeCost: 10
      },
  }],
  levelThree: [{
      plateMail: {
        name: 'Plate Mail',
        description: 'Heavy and protective. Blocks Beasts significantly',
        level: 3,
        blockBeast: 3,
        unique: false,
        icon: 'resources/items/armor/Plate_Mail.gif',
        slimeCost: 15
      },
      ninjaGarb: {
        name: 'Ninja Garb',
        description: 'Black and silent. Blocks Undead significantly',
        level: 3,
        blockUndead: 3,
        unique: true,
        icon: 'resources/items/armor/Ninja_Garb.gif',
        slimeCost: 15
      },
  }],
  levelFour: [{
      dragonScales: {
        name: 'Dragon Scales',
        description: 'Fully magical protection. Blocks Beasts and Undead completely',
        level: 4,
        blockUndead: 100,
        blockBeasts: 100,
        unique: true,
        icon: 'resources/items/armor/Dragon_Scale.gif',
        slimeCost: 30,
        goldCost: 30
      }
  }]
}]

let boots = [{ 
    levelOne: {
      furBoots: {
        name: 'Fur Boots',
        description: 'Too hot in the summer, too hot in the winter too. Kill slimes a tad quicker',
        level: 1,
        slimeKillAdd: 1,
        unique: false,
        icon: 'resources/items/boots/Fur_Boots.gif',
        slimeCost: 5
      },
      leatherBoots: {
        name: 'Leather Boots',
        description: 'Why arent there more of these around? Kill slimes a little quicker',
        level: 1,
        slimeKillAdd: 2,
        unique: true,
        icon: 'resources/items/boots/Leather_Boots.gif',
        slimeCost: 5
      }
    },
    levelTwo: {
      knightsGreave: {
        name: 'Knights Greave',
        description: 'Protect your shins. Kill slimes a bit quicker',
        level: 2,
        slimeKillAdd: 3,
        unique: false,
        icon: 'resources/items/boots/Knights_Greave.gif',
        slimeCost: 10
      },
      leatherBoots: {
        name: 'Leather Boots',
        description: 'Werewolves stay away. Kill slimes quicker',
        level: 2,
        slimeKillAdd: 4,
        unique: true,
        icon: 'resources/items/boots/Silver_Greave.gif',
        slimeCost: 10
      }
    },
    levelThree: {
      goldenBoots: {
        name: 'Golden Boots',
        description: 'Kick butts with a shine. Kill slimes a decent amount quicker',
        level: 3,
        slimeKillAdd: 5,
        unique: false,
        icon: 'resources/items/boots/Knights_Greave.gif',
        slimeCost: 15
      },
      ninjaSandals: {
        name: 'Ninja Sandals',
        description: 'Run up walls. Kill slimes a lot quicker',
        level: 3,
        slimeKillAdd: 6,
        unique: true,
        icon: 'resources/items/boots/Ninja_Sandals.gif',
        slimeCost: 15
      }
    },
    levelFour: {
      ninjaSandals: {
        name: 'Ninja Sandals',
        description: 'Look glorious. Kill swaths of slimes',
        level: 4,
        slimeKillAdd: 7,
        unique: true,
        icon: 'resources/items/boots/Dragon_Boots.gif',
        slimeCost: 30,
        goldCost: 30
      }
    }
}]
//#endregion


let monsters = {
  brigand: [{
    name: 'Brigand',
    img: 'resources/monsters/Brigand.gif',
    level: 0
  }],
  slimes: [
    {
      name: 'Weak Slime',
      img: 'resources/monsters/slimes/Slime.gif',
      level: 1
    },{ 
      name: 'Meaty Slime',
      img: 'resources/monsters/slimes/Slime_Beast.gif',
      level: 2
    },{
      name: 'Chonky Slime',
      img: 'resources/monsters/slimes/Ooze.gif',
      level: 3
    }
  ],
  beasts: [{
    goblin: {
      name: 'Goblin',
      img: 'resources/monsters/beasts/Alec_Goblin.gif',
      level: 1
    },
    antLion: {
      name: 'Ant Lion',
      img: 'resources/monsters/beasts/Ant_Lion.gif',
      level: 2
    },
    golem: {
      name: 'Earth Golem',
      img: 'resources/monsters/beasts/Golem.gif',
      level: 3
    },
    woodWalker: {
      name: 'Wood Walker',
      img: 'resources/monsters/beasts/Wood_Walker.gif',
      level: 4
    },
  }],
  undead: [{
    zombie: {
      name: 'Zombie',
      img: 'resources/monsters/undead/Zombie.gif',
      level: 1
    },
    skeleton: {
      name: 'Skeleton',
      img: 'resources/monsters/undead/Skeleton.gif',
      level: 2
    },
    ghoul: {
      name: 'Ghoul',
      img: 'resources/monsters/undead/Amaze.gif',
      level: 3
    },
    slayer: {
      name: 'Slayer',
      img: 'resources/monsters/undead/Slayer.gif',
      level: 4
    },
  }]
}

let characters = [{
  unlocks: {
    guildMaster: {
      name: 'Guild Master',
      icon: 'resources/characters/unlocks/Innkeeper.gif',
      slimeCost: 20,
    },
    bladeSmith: {
      name: 'Blade Smith',
      icon: 'resources/characters/unlocks/Master_Hama.gif',
      goldCost: 20,
    }
  },
  hirelings: {
    levelOne: [{
      spectralArmor: {
        name: 'Spectral Armor',
        quote: `"Rattling noises"`,
        level: 1,
        health: 20,
        unique: false,
        icon: 'resources/characters/hirelings/hireicons/Shadow_Babi.gif',
        img: 'resources/characters/hirelings/Azart.gif',
        slimeCost: 5
      },
      jenna: {
        name: 'Jenna',
        quote: 'Are you saying that Im insensitive!?',
        level: 1,
        health: 50,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Jenna.gif',
        img: 'resources/characters/hirelings/Azart.gif',
        slimeCost: 10,
        slots: {}
      },
      garet: {
        name: 'Garet',
        quote: 'Evil never prevails!',
        level: 1,
        health: 50,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Garet2.gif',
        img: 'resources/characters/hirelings/Garet_Mace_Front.gif',
        slimeCost: 10,
        slots: {}
      }
    }],
    levelTwo: [{
      sheba: {
        name: 'Sheba',
        quote: 'I wonder... Could it be the wind?',
        level: 2,
        health: 75,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Sheba.gif',
        img: 'resources/characters/hirelings/Sheba_Mace_Front.gif',
        slimeCost: 15,
        slots: {}
      },
      piers: {
        name: 'Piers',
        quote: 'Honor, plebeians, do you know it?',
        level: 2,
        health: 75,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Piers.gif',
        img: 'resources/characters/hirelings/Piers_lSword_Front.gif',
        slimeCost: 15,
        slots: {}
      },
      ivan: {
        name: 'Ivan',
        quote: 'Do not give up so easily...',
        level: 2,
        health: 75,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Ivan.gif',
        img: 'resources/characters/hirelings/Ivan_Staff_Front.gif',
        slimeCost: 20,
        slots: {}
      }
    }],
    levelThree: [{
      mendardi: {
        name: 'Menardi',
        quote: 'Let us make haste!',
        level: 3,
        health: 100,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Menardi.gif',
        img: 'resources/characters/hirelings/Menardi_Front.gif',
        slimeCost: 30,
        slots: {}
      },
      saturos: {
        name: 'Saturos',
        quote: 'Tread lightly...',
        level: 3,
        health: 105,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Saturos.gif',
        img: 'resources/characters/hirelings/Saturos_Front.gif',
        slimeCost: 30,
        slots: {}
      },
      felix: {
        name: 'Felix',
        quote: 'What are you saying?',
        level: 3,
        health: 125,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Felix2.gif',
        img: 'resources/characters/hirelings/Felix_lBlade_Front.gif',
        slimeCost: 40,
        slots: {}
      }
    }],
    levelFour: [{
      karst: {
        name: 'Karst',
        quote: 'I would never do anything as terrible as breaking my word.',
        level: 4,
        health: 150,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Karst.gif',
        img: 'resources/characters/hirelings/Karst_Front.gif',
        slimeCost: 50,
        slots: {}
      },
      agatio: {
        name: 'Agatio',
        quote: 'Our town hangs on the brink of extinction',
        level: 4,
        health: 160,
        unique: true,
        icon: 'resources/characters/hirelings/hireicons/Agatio.gif',
        img: 'resources/characters/hirelings/Agatio_Front.gif',
        slimeCost: 60,
        slots: {}
      }
    }]
  }
}]

// Initialize first monster (Brigand, lvl 0)
setCurrentMonster("brigand", "0")

// Set a monster name and image
function setCurrentMonster(type, lvl){
  let monsterImageElem = document.getElementById("monster-image")
  let monsterNameElem = document.getElementById("monster-name")

  let currentMonster = monsters[type].find(m => m.lvl == monsters[type].level)
  
  // this is for reference for understanding. it was working at one point.
  // monsterImageElem.src = monsters[type].find(m => m.type == type.img).img
  monsterImageElem.src = currentMonster.img
  monsterNameElem.innerText = currentMonster.name

}

function healthTimer(){
  // look at the current monster, decrement the health based on that. Each level is a timed amount
  // pass in monster level
  
  let monsterHits = monsters[currentMonsterType][currentMonster];
  let interval = setInterval(drawHealth, 1000)
  console.log(interval);
  

}

function drawHirelings(){

}

function drawSlots(){

}

function drawItems(){

}

function drawResources(){

}

function djinnActivate(){

}

function drawSelectionMenu(){

}




