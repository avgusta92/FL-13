function Fighter(fighter) {
  const number100 = 100;
  let winsResult = 0;
  let lossesResult = 0;

  this.getName = function () {
    return fighter.name;
  };

  this.getDamage = function () {
    return fighter.damage;
  };

  this.getStrength = function () {
    return fighter.strength;
  };

  this.getAgility = function () {
    return fighter.agility;
  };

  this.getHealth = function () {
    return fighter.hp;
  };

  this.setHealth = function (newHealth) {
    fighter.hp = newHealth;
    return fighter.hp;
  };

  this.attack = function (defender) {
    let result;
    let strength = defender.getStrength();
    let agility = defender.getAgility();
    let probabilityOfSuccess = number100 - (strength + agility);
    let randomNumber = parseInt(Math.random() * number100);

    if (randomNumber <= probabilityOfSuccess) {
      winsResult++;
      let newHealth = defender.getHealth() - fighter.damage;
      defender.setHealth(newHealth);
      result =
        fighter.name +
        ` makes ` +
        fighter.damage +
        ` damage to ` +
        defender.getName();
    } else {
      lossesResult++;
      result = fighter.name + ` attack missed`;
    }

    console.log(result);
  };

  this.logCombatHistory = function () {
    console.log(
      `Name: ` +
        fighter.name +
        `, Wins: ` +
        winsResult +
        `, Losses: ` +
        lossesResult
    );
  };

  this.heal = function (healthPoints) {
    let hp = fighter.hp + healthPoints;
    if (hp >= number100) {
      fighter.hp = number100;
    } else {
      fighter.hp = hp;
    }
  };

  this.dealDamage = function (healthPoints) {
    let hp = fighter.hp - healthPoints;
    fighter.hp = hp > 0 ? hp : 0;
  };

  this.addWin = function () {
    winsResult++;
  };

  this.addLoss = function () {
    lossesResult++;
  };
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() <= 0) {
    console.log(`${fighter1.getName()} is dead and can't fight.`);
  } else if (fighter2.getHealth() <= 0) {
    console.log(`${fighter2.getName()} is dead and can't fight.`);
  } else {
    let activeFighter = fighter2;
    let defenderFighter;

    do {
      if (activeFighter === fighter2) {
        activeFighter = fighter1;
        defenderFighter = fighter2;
      } else {
        activeFighter = fighter2;
        defenderFighter = fighter1;
      }

      activeFighter.attack(defenderFighter);
    } while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0);

    let winner;
    if (fighter1.getHealth() <= 0) {
      winner = fighter2.getName();
    } else if (fighter2.getHealth() <= 0) {
      winner = fighter1.getName();
    }

    console.log(winner + ` has won!`);
  }
}
