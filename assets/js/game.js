// find a way to call a game end
//make the game replayable
//allow the player to shop while there are more enemies


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 100;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert("Great job you survived the game! You now have a score of " + playerMoney + ".");
  } 
  
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "would you like to REFIL your health, UPGRADE your attack, or LEAVE the shop? Please endter one: 'REFILL', 'UPGRADE', OR 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney>= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
  
      // increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE":  
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
      // increase attack and decrease money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }

      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
  
      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
  
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
    //reset player status
    playerHealth = 100;
    playerAttack = 100;
    playerMoney = 10;
    
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
  
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
    var pickedEnemyName = enemyNames[i];
  
    enemyHealth = 50;
    
    fight(pickedEnemyName);
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
      
      // if yes, take them toi the store function
      if (storeConfirm) {
        shop();
      }
      
    }
  }
  else {
   window.alert("You have lost your robot in battle! Game Over!");
   break;
  }

}
  //play again
endGame();     
};

//start the game when the page loads
startGame();