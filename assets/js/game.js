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

// If else statments within button clicks allow the array to be filled with the "Good guy" always in place [0]
// and the bad guy always in place [1];

	$("#scout.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[0]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').prepend('<img src="assets/images/hero_scout.png" height="180px" width="180px"/>');
        }
        
        
    });

    $("#knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[1]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        	$('#good-guy-image-div').prepend('<img src="assets/images/knight.png" height="180px" width="180px"/>');
        }
        

    });

    $("#zombie_stu.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[2]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        }
        
    });

    $("#gold_knight.good-guy-img").on("click", function() {

        if (!lockButtonsGoodGuys) {
        	charChosen.push(goodArray[3]);
        	lockButtonsGoodGuys = true;
        	goodGuyChosenAlready = true;
        }
        
    });

    $("#ogre.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[0]);
        	lockButtonsBadGuys = true;
        	
        }
        
    });

    $("#dark_knight.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[1]);
        	lockButtonsBadGuys = true;
        }

        
    });

    $("#king.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[2]);
        	lockButtonsBadGuys = true;
        }


    });

    $("#boss_group.bad-guy-img").on("click", function() {

        if (!lockButtonsBadGuys && goodGuyChosenAlready) {
        	charChosen.push(badArray[3]);
        	lockButtonsBadGuys = true;
        }


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
	}

	function fight(){

		while(charChosen[0].health >= 1 || charChosen[1].health >= 1){

			attack();
			defend();

			dead();
		}

		function dead(){

		}

	}


	// Need to figure out fighting mechanics

	function attack(){

		// User Attacks

		var damageThisAttack = 0;

		charChosen[1].health = charChosen[1].health - charChosen[0].attack;
		damageThisAttack += charChosen[0].attack;


		/*
		// Check if dead ?? 
		if()
		*/


		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[1].health -= charChosen[1].health - (charChosen[0].attack * charChosen[0].crit);
			damageThisAttack += charChosen[0].attack * charChosen[0].crit;

			// Check if dead ??

			$("#text-line-double-damage").html("You did critical damage!");
			$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
			console.log("Crit: " + damageThisAttack);


		}

		$("#text-line-damage-dealt").html("<p>You dealt: " + damageThisAttack + "</p>");
		console.log("No crit: " + damageThisAttack);



		// Computer attacks back 

		var damageTakenThisAttack = 0;

		// Normal Attack
		charChosen[0].health = charChosen[0].health - charChosen[1].attack;
		damageThisAttack += charChosen[1].attack;

	 	// Check if dead ??

		// Possible Crit
		if(Math.floor(Math.random() * 2) + 1 === 1) {

			charChosen[0].health -= charChosen[0].health - (charChosen[1].attack * charChosen[1].crit);
			damageThisAttack += charChosen[1].attack * charChosen[1].crit;

			// Check if dead ??

			$("#text-line-damage-recieved").html("<p>You received crital damage: " + damageTakenThisAttack + "</p>");
			console.log("Crit: " + damageTakenThisAttack);


		}

		$("#text-line-damage-recieved").html("<p>You took: " + damageThisAttack + "</p>");
		console.log("No crit: " + damageThisAttack);


	}


	function levelUp(){
		scout.health = 150 + 60;
		knight.health = 225 + 70;
		zombie.health = 200 + 55;
		goldKnight.health = 240 + 75;
	}



});




 	/* JQuery Hover
 	
 	$("#crystal-orange").hover(function(){
        $(this).css("opacity", "0.65");
        }, function(){
        $(this).css("opacity", "1");
    */