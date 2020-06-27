


let weapons = { 
  levelOne: {
    broadAxe: {
      name: "Broad Axe",
      description: "A wide axe that helps with killing Slimes",
      level: 1,
      slimeMultiplier: 2,
      unique: false,
      icon: "resources/items/weapons/Broad_Axe.gif",
      slimeCost: 5
    },
    witchsWand: {
      name: "Witch's Wand",
      description: "A crooked wand that helps with killing Monsters",
      level: 1,
      goldMultiplier: 2,
      unique: true,
      icon: "resources/items/weapons/Witchs_Wand.gif",
      slimeCost: 5
    }
  },
  levelTwo: {
    silverBlade: {
      name: "Silver Blade",
      description: "A sword made with silver that helps with killing Slimes",
      level: 2,
      slimeMultiplier: 3,
      unique: false,
      icon: "resources/items/weapons/Silver_Blade.gif",
      slimeCost: 10
    },
    blessedMace: {
      name: "Blessed Mace",
      description: "A divinely blessed mace that helps with killing Monsters",
      level: 2,
      goldMultiplier: 3,
      unique: true,
      icon: "resources/items/weapons/Blessed_Mace.gif",
      slimeCost: 10
    }
  },
  levelThree: {
    psynergyRod: {
      name: "Psynergy Rod",
      description: "A strange magical rod that helps with killing Slimes",
      level: 3,
      slimeMultiplier: 4,
      unique: false,
      icon: "resources/items/weapons/Psynergy_Rod.gif",
      slimeCost: 15
    },
    muramasa: {
      name: "Muramasa",
      description: "A blade forged in blood that helps with killing Monsters",
      level: 3,
      goldMultiplier: 4,
      unique: true,
      icon: "resources/items/weapons/Witchs_Wand.gif",
      slimeCost: 15
    }
  },
  levelFour: {
    gaiaBlade: {
      name: "Gaia Blade",
      description: "Decimate your foes with this blade forged from a falling star",
      level: 4,
      slimeMultiplier: 5,
      goldMultiplier: 5,
      unique: true,
      icon: "resources/items/weapons/Gaia_Blade.gif",
      slimeCost: 30,
      goldCost: 30
    }
  }
  }

let special = { 
  levelOne: {
      fujinShield: {
        name: "Fujin Shield",
        description: "A simple but strong shield that protects a little from both Slimes and Monsters",
        level: 1,
        blockBeast: .5,
        blockUndead: .5,
        unique: false,
        icon: "resources/items/special/Fujin_Shield.gif",
        slimeCost: 5
      },
      venusDjinn: {
        name: "Venus Djinn",
        label: "Flint",
        description: "Strike a blow that can cleave stone",
        level: 1,
        summonAdd: 1,
        unique: true,
        use: "venus",
        icon: "resources/items/djinn/djinn-icons/Venus.gif",
        ready: "resources/items/djinn/djinn-ready/Venus_Djinn.gif",
        used: "resources/items/djinn/djinn-used/Venus_Djinn_Sit.gif",
        slimeCost: 5
      }
  },
  levelTwo: {
      knightsHelm: {
        name: "Knight's Helm",
        description: "A sturdy helmet that protects from both Slimes and Monsters",
        level: 2,
        blockBeast: 1,
        blockUndead: 1,
        unique: false,
        icon: "resources/items/special/Knights_Helm.gif",
        slimeCost: 10
      },
      mercuryDjinn: {
        name: "Mercury Djinn",
        label: "Mist",
        description: "Restore party HP with soothing mist",
        level: 2,
        summonAdd: 1,
        unique: true,
        use: "mercury",
        icon: "resources/items/djinn/djinn-icons/Mercury.gif",
        ready: "resources/items/djinn/djinn-ready/Mercury_Djinn.gif",
        used: "resources/items/djinn/djinn-used/Mercury_Djinn_Sit.gif",
        slimeCost: 10
      }
  },
  levelThree: {
      starDust: {
        name: "Star Dust",
        description: "Rare metal from space",
        level: 3,
        healthBoost: 10,
        useTime: 10,
        unique: false,
        icon: "resources/items/special/Star_Dust.gif",
        slimeCost: 15
      },
      marsDjinn: {
        name: "Mars Djinn",
        label: "Scorch",
        description: "Stun a foe with a blast attack",
        level: 3,
        blockBeast: 10,
        blockUndead: 10,
        summonAdd: 1,
        unique: true,
        use: "mars",
        icon: "resources/items/djinn/djinn-icons/Mars.gif",
        ready: "resources/items/djinn/djinn-ready/Mars_Djinn.gif",
        used: "resources/items/djinn/djinn-used/Mars_Djinn_Sit.gif",
        slimeCost: 15
      }
  },
  levelFour: {
      jupiterDjinn: {
        name: "Jupiter Djinn",
        label: "Gust",
        description: "Attack with mighty wind gusts",
        level: 4,
        summonAdd: 1,
        unique: true,
        use: "jupiter",
        icon: "resources/items/djinn/djinn-icons/Jupiter.gif",
        ready: "resources/items/djinn/djinn-ready/Jupiter_Djinn.gif",
        used: "resources/items/djinn/djinn-used/Jupiter_Djinn_Sit.gif",
        slimeCost: 30,
        goldCost: 30
      }
  }
  }

let armor = { 
  levelOne: {
      furCoat: {
        name: "Fur Coat",
        description: "Too hot in the summer, just right in the winter. Blocks Beasts a little",
        level: 1,
        blockBeast: 1,
        unique: false,
        icon: "resources/items/armor/Fur_Coat.gif",
        slimeCost: 5
      },
      adeptsClothes: {
        name: "Adept's Clothes",
        description: "Breezy and light. Blocks Undead a little",
        level: 1,
        blockUndead: 1,
        unique: true,
        icon: "resources/items/armor/Adepts_Clothes.gif",
        slimeCost: 5
      },
  },
  levelTwo: {
      chainMail: {
        name: "Chain Mail",
        description: "Heavy, but moveable. Blocks Beasts somewhat",
        level: 2,
        blockBeast: 2,
        unique: false,
        icon: "resources/items/armor/Chain_Mail.gif",
        slimeCost: 10
      },
      elvenShirt: {
        name: "Elven Shirt",
        description: "Silky and snappy. Blocks Undead somewhat",
        level: 2,
        blockUndead: 2,
        unique: true,
        icon: "resources/items/armor/Elven_Shirt.gif",
        slimeCost: 10
      },
  },
  levelThree: {
      plateMail: {
        name: "Plate Mail",
        description: "Heavy and protective. Blocks Beasts significantly",
        level: 3,
        blockBeast: 3,
        unique: false,
        icon: "resources/items/armor/Plate_Mail.gif",
        slimeCost: 15
      },
      ninjaGarb: {
        name: "Ninja Garb",
        description: "Black and silent. Blocks Undead significantly",
        level: 3,
        blockUndead: 3,
        unique: true,
        icon: "resources/items/armor/Ninja_Garb.gif",
        slimeCost: 15
      },
  },
  levelFour: {
      dragonScales: {
        name: "Dragon Scales",
        description: "Fully magical protection. Blocks Beasts and Undead completely",
        level: 4,
        blockUndead: 100,
        blockBeasts: 100,
        unique: true,
        icon: "resources/items/armor/Dragon_Scale.gif",
        slimeCost: 30,
        goldCost: 30
      }
  }
  }

  let boots = { 
    levelOne: {
      furCoat: {
        name: "Fur Coat",
        description: "Too hot in the summer, just right in the winter. Blocks Beasts a little",
        level: 1,
        blockBeast: 1,
        unique: false,
        icon: "resources/items/armor/Fur_Coat.gif",
        slimeCost: 5
      },
      adeptsClothes: {
        name: "Adept's Clothes",
        description: "Breezy and light. Blocks Undead a little",
        level: 1,
        blockUndead: 1,
        unique: true,
        icon: "resources/items/armor/Adepts_Clothes.gif",
        slimeCost: 5
      },
    },
    levelTwo: {
      chainMail: {
        name: "Chain Mail",
        description: "Heavy, but moveable. Blocks Beasts somewhat",
        level: 2,
        blockBeast: 2,
        unique: false,
        icon: "resources/items/armor/Chain_Mail.gif",
        slimeCost: 10
      },
      elvenShirt: {
        name: "Elven Shirt",
        description: "Silky and snappy. Blocks Undead somewhat",
        level: 2,
        blockUndead: 2,
        unique: true,
        icon: "resources/items/armor/Elven_Shirt.gif",
        slimeCost: 10
      },
    },
    levelThree: {
      plateMail: {
        name: "Plate Mail",
        description: "Heavy and protective. Blocks Beasts significantly",
        level: 3,
        blockBeast: 3,
        unique: false,
        icon: "resources/items/armor/Plate_Mail.gif",
        slimeCost: 15
      },
      ninjaGarb: {
        name: "Ninja Garb",
        description: "Black and silent. Blocks Undead significantly",
        level: 3,
        blockUndead: 3,
        unique: true,
        icon: "resources/items/armor/Ninja_Garb.gif",
        slimeCost: 15
      },
    },
    levelFour: {
      dragonScales: {
        name: "Dragon Scales",
        description: "Fully magical protection. Blocks Beasts and Undead completely",
        level: 4,
        blockUndead: 100,
        blockBeasts: 100,
        unique: true,
        icon: "resources/items/armor/Dragon_Scale.gif",
        slimeCost: 30,
        goldCost: 30
      }
    }
    }


