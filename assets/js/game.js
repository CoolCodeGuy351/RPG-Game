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
		health: 230,
		attack: 30,
		crit: 0.7,
	};

	var boss ={
		name: "boss",
		health: 250,
		attack: 35,
		crit: 0.8,
	};

	charChosen = [];
	goodArray = [scout,knight,zombie,goldKnight];
	badArray =[ogre,darkKnight,king,boss];
	var lockButtonsGoodGuys = false;
	var lockButtonsBadGuys = false;
	var goodGuyChosenAlready = false;
	var xp = 0;

// If else statments within button clicks allow the array to be filled with the "Good guy" always in place [0]
// and the bad guy always in place [1];

	$("#scout.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[0]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/hero_scout.png" height="180px" width="180px"/>');
        }
        
        
    });

    $("#knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[1]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/knight.png" height="180px" width="180px"/>');
        }
        

    });

    $("#zombie_stu.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[2]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/zombie_stu.png" height="180px" width="180px"/>');
        }
        
    });

    $("#gold_knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[3]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').html('<img src="assets/images/gold_knight.png" height="180px" width="180px"/>');
        }
        
    });

    $("#ogre.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[0]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/ogre.png" height="180px" width="180px"/>');
        }
        
    });

    $("#dark_knight.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[1]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/dark_knight.png" height="180px" width="180px"/>');
        }

        
    });

    $("#king.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[2]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/king.png" height="180px" width="180px"/>');
        }


    });

    $("#boss_group.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[3]);
        	lockButtonsBadGuys = true;
        	$('#bad-guy-image-div').html('<img src="assets/images/boss_group.png" height="180px" width="180px"/>');
        }


    });

    $('#button-attack').on("click", function(){

    	attack();

    });


    // Functions

	function win(){
		scout.health = 150;
		knight.health = 225;
		zombie.health = 200;
		goldKnight.health = 240;
		ogre.health = 180;
		darkKnight.health = 210;
		king.health =230;
		boss.health = 250;
		lockButtonsGoodGuys = false;
		lockButtonsBadGuys = false;
		goodGuyChosenAlready = false;
		xp = 0;
	}


	// Attack function runs when the user clicks the attack button and battles currently selected hero against the currently selected enemy.

	function attack(){

		// User Attacks
		var damageThisAttack = 0;

		charChosen[1].health = charChosen[1].health - charChosen[0].attack;
		damageThisAttack += charChosen[0].attack;

		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[1].health -= charChosen[1].health - (charChosen[0].attack * charChosen[0].crit);
			damageThisAttack += charChosen[0].attack * charChosen[0].crit;

			$("#text-line-double-damage").html("You did critical damage!");
			$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
			console.log("Crit: " + damageThisAttack);
		}	

		$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
		// end crit

		// Computer attacks back 
		var damageTakenThisAttack = 0;

		// Normal Attack
		charChosen[0].health = charChosen[0].health - charChosen[1].attack;
		damageThisAttack += charChosen[1].attack;

		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[0].health -= charChosen[0].health - (charChosen[1].attack * charChosen[1].crit);
			damageThisAttack += charChosen[1].attack * charChosen[1].crit;


			$("#text-line-damage-recieved").html("<p>You received crital damage: " + damageTakenThisAttack + "</p>");
			console.log("Crit: " + damageTakenThisAttack);

		}

		$("#text-line-damage-recieved").html("<p>You took: " + damageThisAttack + "</p>");
		console.log("No crit: " + damageThisAttack);

		// Check if selected either 
		if( charChosen[0].health < 1 ){

		alert("Sorry You lost! Click okay to restart")
		win() // This function ends the game

		} else if( charChosen[1].health < 1 ){

		dead() // This function selects a new character to fight

		}

	}

	// function end


	function levelUp(){
		scout.health = 150 + 60;
		knight.health = 225 + 70;
		zombie.health = 200 + 55;
		goldKnight.health = 240 + 75;
	}

	function dead() {

		xp++;
		if(xp === 2){
			levelUp();
		}
		charChosen.splice(1,1,badArray[i]);
		$('#bad-guy-image-div').html('<img src="assets/images/skull.png" height="180px" width="180px"/>')
	
	}

});




 	/* JQuery Hover
 	
 	$("#crystal-orange").hover(function(){
        $(this).css("opacity", "0.65");
        }, function(){
        $(this).css("opacity", "1");
    */