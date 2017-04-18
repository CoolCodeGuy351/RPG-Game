/* Javasctipt / JQuery */

$(document).ready(function() {
		
	var scout = {
		name: "scout",
		health: 150,
		attack: 50,
		crit: 0.9,
	};

	var knight = {
		name: "knight",
		health: 225,
		attack: 40,
		crit: 0.5,
	};

	var zombie = {
		name: "zombie",
		health: 200,
		attack: 35,
		crit: 0.8,
	};

	var goldKnight ={
		name: "goldKnight",
		health: 240,
		attack: 35,
		crit: 0.75,
	};

	var ogre = {
		name: "ogre",
		health: 180,
		attack: 20,
		crit: 0.5,
	};

	var darkKnight ={
		name: "darkKnight",
		health: 210,
		attack: 25,
		crit: 0.6,
	};

	var king ={
		name: "king",
		health: 300,
		attack: 30,
		crit: 0.7,
	};

	var boss ={
		name: "boss",
		health: 380,
		attack: 35,
		crit: 0.8,
	};

	charChosen = [];
	goodArray = [scout,knight,zombie,goldKnight];
	badArray =[ogre,darkKnight,king,boss];
	var lockButtonsGoodGuys = false;
	var lockButtonsBadGuys = false;
	var goodGuyChosenAlready = false;
	var scoutIncHealth = 150;
	var knightIncHealth = 225;
	var zombieIncHealth = 200;
	var goldKnightIncHealth = 240;
	var xp = 0;


// If else statments within button clicks allow the array to be filled with the "Good guy" always in place [0]
// and the bad guy always in place [1];

	$("#scout.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[0]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/hero_scout.png" height="180px" width="180px"/>');
        	$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
        }
        
        
    });

    $("#knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[1]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/knight.png" height="180px" width="180px"/>');
        	$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
        }
        

    });

    $("#zombie_stu.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[2]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/zombie_stu.png" height="180px" width="180px"/>');
        	$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
        }
        
    });

    $("#gold_knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[3]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/gold_knight.png" height="180px" width="180px"/>');
        	$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
        }
        
    });

    $("#ogre.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[0]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/ogre.png" height="180px" width="180px"/>');
        	$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
        	console.log(charChosen[1])
        }
        
    });

    $("#dark_knight.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[1]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/dark_knight.png" height="180px" width="180px"/>');
        	$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
        }

        
    });

    $("#king.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[2]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/king.png" height="180px" width="180px"/>');
        	$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
        }


    });

    $("#boss_group.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[3]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/boss_group.png" height="180px" width="180px"/>');
        	$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
        }


    });

    $('#button-attack').on("click", function(){

    	attack();

    });

    /*
    for(var i = 0 ; i < badArray.length ; i++){
    	charChosen.splice(i);
    }
	*/

    // Functions

	function userLose(){
		scout.health = 150;
		knight.health = 225;
		zombie.health = 200;
		goldKnight.health = 240;
		ogre.health = 180;
		darkKnight.health = 210;
		king.health =230;
		boss.health = 250;
		scout.attack = 50;
		knight.attack = 40;
		zombie.attack = 35;
		goldKnight.attack = 35;
		lockButtonsGoodGuys = false;
		lockButtonsBadGuys = false;
		goodGuyChosenAlready = false;
		/* DONT NEED THESE??
		scoutIncHealth = 150;
		knightIncHealth = 225;
		zombieIncHealth = 200;
		goldKnightIncHealth = 240;
		*/
		xp = 0;
		$('#good-guy-image-div').html('<h3>You died! Choose a new character and try again!</h3>');
		$('#bad-guy-image-div').html('<h3>Game over!</h3>');
		$('#bad-health-text').html('');
		$('#health-text').html('');
		charChosen.pop();
		charChosen.pop();

	}


	// Attack function runs when the user clicks the attack button and battles currently selected hero against the currently selected enemy.

	function attack(){

		// User Attacks
		var damageThisAttack = 0;

		charChosen[1].health = charChosen[1].health - charChosen[0].attack;
		damageThisAttack += charChosen[0].attack;

		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[1].health -= (charChosen[0].attack * charChosen[0].crit);
			damageThisAttack += charChosen[0].attack * charChosen[0].crit;

			$("#text-line-double-damage").html("You did critical damage!");
			$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
			$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");

			// Renders health remaining to screen and does not render if foe is dead
			if(charChosen[1].health > 1){
			$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
			} else {
				$("#bad-health-text").html("");
			}

			console.log("Crit: " + damageThisAttack);
		}	

		$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
		$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");

		// Renders health remaining to screen and does not render if foe is dead
		if(charChosen[1].health > 1){
		$("#bad-health-text").html("<p>Remaining health: " + charChosen[1].health + "</p>");
		} else {
				$("#bad-health-text").html("");
		}


		// Computer attacks back 
		var damageTakenThisAttack = 0;

		// Normal Attack
		charChosen[0].health = charChosen[0].health - charChosen[1].attack;
		damageThisAttack += charChosen[1].attack;

		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[0].health -= (charChosen[1].attack * charChosen[1].crit);
			damageThisAttack += charChosen[1].attack * charChosen[1].crit;


			$("#text-line-damage-recieved").html("<p>You received crital damage: " + damageTakenThisAttack + "</p>");
			$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
			


		}

		$("#text-line-damage-recieved").html("<p>You took: " + damageThisAttack + "</p>");
		$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");


		// Check if selected either 
		if( charChosen[0].health < 1 ){

		alert("Sorry You lost! Click okay to restart")
		userLose(); // This function ends the game

		} else if( charChosen[1].health < 1 ){

		dead(); // This function selects a new character to fight

		}

		damageThisAttack = 0;
		damageTakenThisAttack = 0;

		// Renders Line letting player know he can level up soon.
		if(xp === 1){
			$("#one-more-foe").html("Defeat one more foe to level up!");
		} else {
			$("#one-more-foe").html("");
		}
		console.log("Good guy remaining health: " + charChosen[0].health);
		console.log("Bad guy remaining health: " + charChosen[1].health);

	}

	// function end


	function levelUp(){
		scout.health = scoutIncHealth + 70;
		knight.health = knightIncHealth + 70;
		zombie.health = zombieIncHealth + 70;
		goldKnight.health = goldKnightIncHealth + 70;

		scout.attack += 5
		knight.attack += 5;
		zombie.attack += 5;
		goldKnight.attack += 5;

		xp = 0;

		$("#health-text").html("<p>Remaining health: " + charChosen[0].health + "</p>");
	}

	function dead() {

		xp++;
		if(xp === 2){
			levelUp();
		}
		charChosen.splice(1,1);
		$('#bad-guy-image-div').html('<img src="assets/images/skull.png" height="160px" width="160px"/>')
		console.log(charChosen[1]);
		lockButtonsBadGuys = false;
		ogre.health = 180;
		darkKnight.health = 210;
		king.health =230;
		boss.health = 250;
	
	}

});




 	/* JQuery Hover
 	
 	$("#crystal-orange").hover(function(){
        $(this).css("opacity", "0.65");
        }, function(){
        $(this).css("opacity", "1");
    */