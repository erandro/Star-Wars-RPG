$(document).ready(function () {
    var obj = document.createElement("audio");
    obj.src = "assets/audio/Star_Wars_8_Bit.mp3";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;

    $("#music-icon").on("click", function () {
        if (soundStatus === "off") {
            $(this).attr("src", "assets/images/soundon.png");
            soundStatus = "on";
            obj.play();
        } else {
            $(this).attr("src", "assets/images/soundoff.png");
            soundStatus = "off";
            obj.currentTime = 0;
            obj.pause();
        }
    });
});

var soundStatus = "off";



const backgrounds = [
    "ahch-to",
    "bay",
    "corellia",
    "dagobah",
    "endor",
    "hallway",
    "hoth",
    "jakku",
    "mustafar",
    "tatooine",
    "tatooine2"
];
function pickBackground() {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

// Set some effects for images
function opacityChange(img) {
    img.attr("style", "opacity: 0.2;");
}
function opacityNone(img) {
    img.attr("style", "opacity: 1;");
}
function ShowCharacter(chara) {
    chara.attr("style", "display: flex;")
}
function HideCharacter(chara) {
    chara.attr("style", "display: none;")
}
function clearCharacter(chara) {
    $(chara, "h4").text("");
    $(chara).removeClass();
}
function clearBox(chara) {
    $(chara).empty();
}


// Choosing a side
var Sith = $(".sith_logo");
var Jedi = $(".jedi_logo");

function hideSith() {
    HideCharacter(Darth_Maul)
    HideCharacter(Darth_Vader)
    HideCharacter(Kylo_Ren)
    HideCharacter(Emperor_Palpatine)
}
function hideJedi() {
    HideCharacter(Obi_Wan)
    HideCharacter(Luke_Skywalker)
    HideCharacter(Rey)
    HideCharacter(Master_Yoda)
}
function showSith() {
    ShowCharacter(Darth_Maul);
    ShowCharacter(Darth_Vader);
    ShowCharacter(Kylo_Ren);
    ShowCharacter(Emperor_Palpatine);
}
function showJedi() {
    ShowCharacter(Obi_Wan);
    ShowCharacter(Luke_Skywalker);
    ShowCharacter(Rey);
    ShowCharacter(Master_Yoda);
}

function pickSithCharacters() {
    showSith();
    hideJedi();
}
function pickJediCharacters() {
    showJedi();
    hideSith();
}
$(Sith).on("click", function () {
    opacityChange(Jedi);
    opacityNone(Sith);
    pickSithCharacters();
    $("#lineTwo").text("Choose your character");
});
$(Jedi).on("click", function () {
    opacityChange(Sith);
    opacityNone(Jedi);
    pickJediCharacters();
    $("#lineTwo").text("Choose your character");
});
function sithJediUnClick() {
    $(Sith).off("click");
    $(Jedi).off("click");
}

// Choosing a character/opement
var Darth_Maul = $(".Darth_Maul");
var Darth_Vader = $(".Darth_Vader");
var Kylo_Ren = $(".Kylo_Ren");
var Emperor_Palpatine = $(".Emperor_Palpatine");
var Obi_Wan = $(".Obi_Wan");
var Luke_Skywalker = $(".Luke_Skywalker");
var Rey = $(".Rey");
var Master_Yoda = $(".Master_Yoda");
var ID = 0;

function sithEnemyLine() {
    clearBox(Sith);
    clearBox(Jedi);
    showJedi();
    hideSith();
    $("#lineOne").text("");
    $("#lineTwo").text(`Choose your opponent`);
}
function jediEnemyLine() {
    clearBox(Sith);
    clearBox(Jedi);
    showSith();
    hideJedi();
    $("#lineOne").text("");
    $("#lineTwo").text("Choose your opponent");
}
var userCharacterIsChosen = false;
var enemyCharacterIsChosen = false;
var userChar = undefined;
var enemyChar = undefined;
var usedIDs = [];

// Sith
$(Darth_Maul).on("click", function () {
    if ((userCharacterIsChosen === false) && (($(usedIDs).index(5) === -1))) {
        userCharacterIsChosen = true;
        sithEnemyLine();
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/maul.png" alt="Darth Maul">');
        firstPick("Darth Maul");
        userChar = "maul";
        opacityNone(Jedi);
        HideCharacter(Darth_Maul);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(5) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 5;
        usedIDs.push(ID);
        $(usedIDs).add(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/maul.png" alt="Darth Maul">');
        secondPick("Darth Maul");
        enemyChar = "maul";
        showAttackButton();
        chracterHP = 160;
        chracterATK = 5;
        characterID = 1;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Darth_Vader).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/vader.png" alt="Darth Vader">');
        firstPick("Darth Vader");
        userChar = "vader";
        opacityNone(Jedi);
        HideCharacter(Darth_Vader);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(6) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 6;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/vader.png" alt="Darth Vader">');
        secondPick("Darth Vader");
        enemyChar = "vader";
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        characterID = 2;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Kylo_Ren).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/kylo.png" alt="Kylo Ren">');
        firstPick("Kylo Ren");
        userChar = "kylo";
        opacityNone(Jedi);
        HideCharacter(Kylo_Ren);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(7) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 7;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/kylo.png" alt="Kylo Ren">');
        secondPick("Kylo Ren");
        enemyChar = "kylo";
        showAttackButton();
        chracterHP = 200;
        chracterATK = 20;
        characterID = 3;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Emperor_Palpatine).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/palpatine.png" alt="Emperor Palpatine">');
        firstPick("Emperor Palpatine");
        userChar = "palpatine";
        opacityNone(Jedi);
        HideCharacter(Emperor_Palpatine);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(8) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 8;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/palpatine.png" alt="Emperor Palpatine">');
        secondPick("Emperor Palpatine");
        enemyChar = "palpatine";
        showAttackButton();
        chracterHP = 250;
        chracterATK = 25;
        characterID = 4;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});

// Jedi
$(Obi_Wan).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/obi.png" alt="Obi Wan">');
        firstPick("Obi Wan");
        userChar = "obi";
        opacityNone(Sith);
        HideCharacter(Obi_Wan);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(1) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 1;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/obi.png" alt="Obi Wan">');
        secondPick("Obi Wan");
        enemyChar = "obi";
        showAttackButton();
        chracterHP = 160;
        chracterATK = 5;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Luke_Skywalker).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/luke.png" alt="Luke Skywalker">');
        firstPick("Luke Skywalker");
        userChar = "luke";
        opacityNone(Sith);
        HideCharacter(Luke_Skywalker);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(2) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 2;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/luke.png" alt="Luke Skywalker">');
        secondPick("Luke Skywalker");
        enemyChar = "luke";
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Rey).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/rey.png" alt="Rey">');
        firstPick("Rey");
        userChar = "rey";
        opacityNone(Sith);
        HideCharacter(Rey);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(3) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 3;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/rey.png" alt="Rey">');
        secondPick("Rey");
        enemyChar = "rey";
        showAttackButton();
        chracterHP = 200;
        chracterATK = 20;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});
$(Master_Yoda).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine();
        $("#user_character").append('<img class="character-img flip-img" src="./assets/images/yoda.png" alt="Master Yoda">');
        firstPick("Master Yoda");
        userChar = "yoda";
        opacityNone(Sith);
        HideCharacter(Master_Yoda);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(4) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 4;
        usedIDs.push(ID);
        $("#enemy_character").append('<img class="character-img" src="./assets/images/yoda.png" alt="Master Yoda">');
        secondPick("Master Yoda");
        enemyChar = "yoda";
        showAttackButton();
        chracterHP = 250;
        chracterATK = 25;
        showStatus();
        sithJediUnClick();
        showFight();
    }
});

function showFight() {
    $("#user-char-fight").append(`<img class="character-gif flip-img" src="./assets/images/${userChar}.gif" alt=${userChar}>`);
    $("#enemy-char-fight").append(`<img class="character-gif" src="./assets/images/${enemyChar}.gif" alt=${enemyChar}>`);
    $("#battlegrounds").attr("style", `background-image:url('./assets/images/background/${pickBackground()}.jpg')`)
    $("#all-characters").addClass("no-display");
}
function hideFight() {
    $("#user-char-fight").empty();
    $("#enemy-char-fight").empty();
    $("#battlegrounds").attr("style", "background-image:none");
    $("#all-characters").removeClass("no-display");
}

function firstPick(name) {
    var newH4name = $("<h4>");
    $(newH4name).text(name)
    $("#user_character").append(newH4name);
}
function secondPick(name) {
    var newH4name = $("<h4>");
    $(newH4name).text(name)
    $("#enemy_character").append(newH4name);
}

// Fighting mode
function showAttackButton() {
    $("#ATK_button").attr("style", "display: flex;");
    $("#lineTwo").text("");
}
function hideAttackButton() {
    $("#ATK_button").attr("style", "display: none;");
}
function showRestartButton() {
    $("#RST_button").attr("style", "display: flex;");
}
function hideRestartButton() {
    $("#RST_button").attr("style", "display: none;");
}
function hideAllCharacters() {
    hideJedi();
    hideSith();
}

// User status
var user_HP = 160;
var chracterHP;
var user_ATK = 0;
var winCount = 0;

// Fighting actions
var btnATKclick = $("#ATK_button");
var btnRSTclick = $("#RST_button");
var characterID;
function userATKgrow() {
    user_ATK = user_ATK + 6;
}
function userHPlower() {
    user_HP = user_HP - chracterATK;
}
function charHPlower() {
    chracterHP = chracterHP - user_ATK;
}

// Status actions
function userStatusChange() {
    // User status
    userHPlower()
    userATKgrow();
    showUserStatus();
    // User Die
    if (user_HP <= 0) {
        $("#user_status").html("<h2>You Died</h2>");
        hideFight();
        hideAttackButton();
        hideAllCharacters()
        setTimeout(function () { showRestartButton() }, 2000);
    }
}
function enemyStatusChange() {
    // Caracter status
    charHPlower();
    showCharacterStatus();
    // Caracter Die
    if (chracterHP <= 0) {
        hideFight();
        // if (ID === 1 || ID === 2 || ID === 3 || ID === 4) {
        //     showJedi()
        // } else { showSith() };
        clearBox("#enemy_character")
        $("#enemy_character").removeClass();
        $("#enemy_status").html("<h2>Enemy Died</h2>");
        //enemyIDdie(characterDeath);
        hideAttackButton();
        enemyCharacterIsChosen = false;
        chracterATK = 0;
        killCharacter();
        winCount = winCount + 1;
        if (winCount === 4) {
            $("#enemy_status").html("<h1>You Won!</h1>");
            setTimeout(function () { showRestartButton() }, 2000);
        }
    }
}
function showUserStatus() {
    clearBox("#user_status")
    u_HP = $("<h4>");
    $(u_HP).text("your HP: " + user_HP);
    $("#user_status").append(u_HP);
    u_ATK = $("<h4>");
    $(u_ATK).text("your ATK: " + user_ATK);
    $("#user_status").append(u_ATK);
}
function showCharacterStatus() {
    clearBox("#enemy_status")
    c_HP = $("<h4>");
    $(c_HP).text("enemy's HP: " + chracterHP);
    $("#enemy_status").append(c_HP);
    c_ATK = $("<h4>");
    $(c_ATK).text("enemy's ATK: " + chracterATK);
    $("#enemy_status").append(c_ATK);
}
function showStatus() {
    showUserStatus();
    showCharacterStatus()
}
function killCharacter() {
    if (ID === 1) {
        $(".Obi_Wan").children().first().attr("src", "assets/images/obi_die.png");
        $(".Obi_Wan").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 2) {
        $(".Luke_Skywalker").children().first().attr("src", "assets/images/luke_die.png");
        $(".Luke_Skywalker").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 3) {
        $(".Rey").children().first().attr("src", "assets/images/rey_die.png");
        $(".Rey").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 4) {
        $(".Master_Yoda").children().first().attr("src", "assets/images/yoda_die.png");
        $(".Master_Yoda").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 5) {
        $(".Darth_Maul").children().first().attr("src", "assets/images/maul_die.png");
        $(".Darth_Maul").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 6) {
        $(".Darth_Vader").children().first().attr("src", "assets/images/vader_die.png");
        $(".Darth_Vader").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 7) {
        $(".Kylo_Ren").children().first().attr("src", "assets/images/kylo_die.png");
        $(".Kylo_Ren").css({ "color": "rgb(44, 44, 44)" });
    }
    if (ID === 8) {
        $(".Emperor_Palpatine").children().first().attr("src", "assets/images/palpatine_die.png");
        $(".Emperor_Palpatine").css({ "color": "rgb(44, 44, 44)" });
    }
}
function reviveCharacter() {
    $(".Obi_Wan").children().first().attr("src", "assets/images/obi.png");
    $(".Obi_Wan").css({ "color": "rgb(255, 255, 255)" });
    $(".Luke_Skywalker").children().first().attr("src", "assets/images/luke.png");
    $(".Luke_Skywalker").css({ "color": "rgb(255, 255, 255)" });
    $(".Rey").children().first().attr("src", "assets/images/rey.png");
    $(".Rey").css({ "color": "rgb(255, 255, 255)" });
    $(".Master_Yoda").children().first().attr("src", "assets/images/yoda.png");
    $(".Master_Yoda").css({ "color": "rgb(255, 255, 255)" });
    $(".Darth_Maul").children().first().attr("src", "assets/images/maul.png");
    $(".Darth_Maul").css({ "color": "rgbrgb(255, 255, 255)" });
    $(".Darth_Vader").children().first().attr("src", "assets/images/vader.png");
    $(".Darth_Vader").css({ "color": "rgbrgb(255, 255, 255)" });
    $(".Kylo_Ren").children().first().attr("src", "assets/images/kylo.png");
    $(".Kylo_Ren").css({ "color": "rgbrgb(255, 255, 255)" });
    $(".Emperor_Palpatine").children().first().attr("src", "assets/images/palpatine.png");
    $(".Emperor_Palpatine").css({ "color": "rgb(255, 255, 255)" });
}

// Btn - ATK & RST
$(btnATKclick).on("click", function () {
    enemyStatusChange();
    userStatusChange();
});
$(btnRSTclick).on("click", function () {
    hideRestartButton()
    userCharacterIsChosen = false;
    enemyCharacterIsChosen = false;
    usedIDs = [];
    user_HP = 160;
    user_ATK = 0;
    winCount = 0;
    //fix row 2
    $("#lineOne").text("Pick a side");
    //fix row 3 - a
    $("#user_character").removeClass();
    $("#user_character").css({ "background-image": "" });
    $("#user_character").empty();
    //fix row 3 - b
    $("#user_status").empty();

    var bringImgback = $('<img src="assets/images/Sith_Logo_small.png" alt="Sith Logo" class="order-img">');
    $("#user_status").append(bringImgback);
    var bringH3back = $("<h3>").addClass("downText").text("Sith");
    $("#user_status").append(bringH3back);

    $(".sith_logo").on("Click", pickSithCharacters());
    //fix row 3 - c
    $("#enemy_status").empty();

    var bringImgback2 = $('<img src="assets/images/Jedi_Logo_small.png" alt="Jedi Logo" class="order-img">');
    $("#enemy_status").append(bringImgback2);
    var bringH3back2 = $("<h3>").addClass("downText").text("Jedi");
    $("#enemy_status").append(bringH3back2);

    $(".jedi_logo").on("Click", pickJediCharacters());
    //fix row 3 - d
    $("#enemy_character").removeClass();
    $("#enemy_character").css({ "background-image": "" });
    $("#enemy_character").empty();
    //fix row 5
    reviveCharacter();

    $(Sith).on("click", function () {
        opacityChange(Jedi);
        opacityNone(Sith);
        pickSithCharacters();
        $("#lineTwo").text("Choose your character");
    });
    $(Jedi).on("click", function () {
        opacityChange(Sith);
        opacityNone(Jedi);
        pickJediCharacters();
        $("#lineTwo").text("Choose your character");
    });
    hideAllCharacters();
});
