// ***Bootcamp H.W 4***



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


function pickSithCharacters() {
    ShowCharacter(Darth_Maul);
    ShowCharacter(Darth_Vader);
    ShowCharacter(Kylo_Ren);
    ShowCharacter(Emperor_Palpatine);
    HideCharacter(Obi_Wan)
    HideCharacter(Luke_Skywalker)
    HideCharacter(Rey)
    HideCharacter(Master_Yoda)
}
function pickJediCharacters() {
    ShowCharacter(Obi_Wan);
    ShowCharacter(Luke_Skywalker);
    ShowCharacter(Rey);
    ShowCharacter(Master_Yoda);
    HideCharacter(Darth_Maul)
    HideCharacter(Darth_Vader)
    HideCharacter(Kylo_Ren)
    HideCharacter(Emperor_Palpatine)
}
$(Sith).on("click", function () {
    opacityChange(Jedi);
    opacityNone(Sith);
    pickSithCharacters();
    $("#lineTwo").text("Pick your character");
});
$(Jedi).on("click", function () {
    opacityChange(Sith);
    opacityNone(Jedi);
    pickJediCharacters();
    $("#lineTwo").text("Pick your character");
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
    ShowCharacter(Obi_Wan);
    ShowCharacter(Luke_Skywalker);
    ShowCharacter(Rey);
    ShowCharacter(Master_Yoda);
    HideCharacter(Darth_Maul);
    HideCharacter(Darth_Vader);
    HideCharacter(Kylo_Ren);
    HideCharacter(Emperor_Palpatine);
    $("#lineOne").text("");
    $("#lineTwo").text("Choose your opponent");
}
function jediEnemyLine() {
    clearBox(Sith);
    clearBox(Jedi);
    ShowCharacter(Darth_Maul);
    ShowCharacter(Darth_Vader);
    ShowCharacter(Kylo_Ren);
    ShowCharacter(Emperor_Palpatine);
    HideCharacter(Obi_Wan);
    HideCharacter(Luke_Skywalker);
    HideCharacter(Rey);
    HideCharacter(Master_Yoda);
    $("#lineOne").text("");
    $("#lineTwo").text("Choose your opponent");
}
var userCharacterIsChosen = false;
var enemyCharacterIsChosen = false;
var usedIDs = [];

// Sith
$(Darth_Maul).on("click", function () {
    if ((userCharacterIsChosen === false) && (($(usedIDs).index(5) === -1))) {
        userCharacterIsChosen = true;
        sithEnemyLine();
        $("#user_character").addClass("Darth_Maul_Fight");
        $(".Darth_Maul_Fight").attr("style", "display: flex;");
        firstPick("Darth Maul");
        opacityNone(Jedi);
        HideCharacter(Darth_Maul);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(5) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 5;
        usedIDs.push(ID);
        $(usedIDs).add(ID);
        $("#enemy_character").addClass("Darth_Maul");
        $(".Darth_Maul").attr("style", "display: flex;");
        secondPick("Darth Maul");
        showAttackButton();
        chracterHP = 120;
        chracterATK = 5;
        characterID = 1;
        showStatus();
        sithJediUnClick();
    }
});
$(Darth_Vader).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Darth_Vader_Fight");
        $(".Darth_Vader_Fight").attr("style", "display: flex;");
        firstPick("Darth Vader");
        opacityNone(Jedi);
        HideCharacter(Darth_Vader);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(6) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 6;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Darth_Vader");
        $(".Darth_Vader").attr("style", "display: flex;");
        secondPick("Darth Vader");
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        characterID = 2;
        showStatus();
        sithJediUnClick();
    }
});
$(Kylo_Ren).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Kylo_Ren_Fight");
        $(".Kylo_Ren_Fight").attr("style", "display: flex;");
        firstPick("Kylo Ren");
        opacityNone(Jedi);
        HideCharacter(Kylo_Ren);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(7) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 7;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Kylo_Ren");
        $(".Kylo_Ren").attr("style", "display: flex;");
        secondPick("Kylo Ren");
        showAttackButton();
        chracterHP = 240;
        chracterATK = 20;
        characterID = 3;
        showStatus();
        sithJediUnClick();
    }
});
$(Emperor_Palpatine).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        sithEnemyLine()
        $("#user_character").addClass("Emperor_Palpatine_Fight");
        $(".Emperor_Palpatine_Fight").attr("style", "display: flex;");
        firstPick("Emperor Palpatine");
        opacityNone(Jedi);
        HideCharacter(Emperor_Palpatine);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(8) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 8;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Emperor_Palpatine");
        $(".Emperor_Palpatine").attr("style", "display: flex;");
        secondPick("Emperor Palpatine");
        showAttackButton();
        chracterHP = 300;
        chracterATK = 25;
        characterID = 4;
        showStatus();
        sithJediUnClick();
    }
});

// Jedi
$(Obi_Wan).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Obi_Wan_Fight");
        $(".Obi_Wan_Fight").attr("style", "display: flex;");
        firstPick("Obi Wan");
        opacityNone(Sith);
        HideCharacter(Obi_Wan);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(1) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 1;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Obi_Wan");
        secondPick("Obi Wan");
        $(".Obi_Wan").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 120;
        chracterATK = 5;
        showStatus();
        sithJediUnClick();
    }
});
$(Luke_Skywalker).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Luke_Skywalker_Fight");
        $(".Luke_Skywalker_Fight").attr("style", "display: flex;");
        firstPick("Luke Skywalker");
        opacityNone(Sith);
        HideCharacter(Luke_Skywalker);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(2) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 2;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Luke_Skywalker");
        secondPick("Luke Skywalker");
        $(".Luke_Skywalker").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 180;
        chracterATK = 10;
        showStatus();
        sithJediUnClick();
    }
});
$(Rey).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine()
        $("#user_character").addClass("Rey_Fight");
        $(".Rey_Fight").attr("style", "display: flex;");
        firstPick("Rey");
        opacityNone(Sith);
        HideCharacter(Rey);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(3) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 3;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Rey");
        secondPick("Rey");
        $(".Rey").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 240;
        chracterATK = 20;
        showStatus();
        sithJediUnClick();
    }
});
$(Master_Yoda).on("click", function () {
    if (userCharacterIsChosen === false) {
        userCharacterIsChosen = true;
        jediEnemyLine();
        $("#user_character").addClass("Master_Yoda_Fight");
        $(".Master_Yoda_Fight").attr("style", "display: flex;");
        firstPick("Master Yoda");
        opacityNone(Sith);
        HideCharacter(Master_Yoda);
    } else if ((enemyCharacterIsChosen === false) && (($(usedIDs).index(4) === -1))) {
        enemyCharacterIsChosen = true;
        ID = 4;
        usedIDs.push(ID);
        $("#enemy_character").addClass("Master_Yoda");
        secondPick("Master Yoda");
        $(".Master_Yoda").attr("style", "display: flex;");
        showAttackButton();
        chracterHP = 300;
        chracterATK = 25;
        showStatus();
        sithJediUnClick();
    }
});

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
    HideCharacter(Obi_Wan);
    HideCharacter(Luke_Skywalker);
    HideCharacter(Rey);
    HideCharacter(Master_Yoda);
    HideCharacter(Darth_Maul);
    HideCharacter(Darth_Vader);
    HideCharacter(Kylo_Ren);
    HideCharacter(Emperor_Palpatine);
}

// User status
var user_HP = 160;
var chracterHP;
var user_ATK = 0;

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
        clearBox("#enemy_character")
        $("#enemy_character").removeClass();
        $("#enemy_status").html("<h2>Enemy Died</h2>");
        //enemyIDdie(characterDeath);
        hideAttackButton();
        enemyCharacterIsChosen = false;
        chracterATK = 0;
        killCharacter();
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
        $(".Obi_Wan").css({ "background-image": "url('assets/images/Obi-Wan_Die.png')" });
    }
    if (ID === 2) {
        $(".Luke_Skywalker").css({ "background-image": "url('assets/images/Luke_Skywalker_Die.png')" });
    }
    if (ID === 3) {
        $(".Rey").css({ "background-image": "url('assets/images/Rey_Die.png')" });
    }
    if (ID === 4) {
        $(".Master_Yoda").css({ "background-image": "url('assets/images/Master_Yoda_Die.png')" });
    }
    if (ID === 5) {
        $(".Darth_Maul").css({ "background-image": "url('assets/images/Darth_Maul_Die.png')" });
    }
    if (ID === 6) {
        $(".Darth_Vader").css({ "background-image": "url('assets/images/Darth_Vader_Die.png')" });
    }
    if (ID === 7) {
        $(".Kylo_Ren").css({ "background-image": "url('assets/images/Kylo_Ren_Die.png')" });
    }
    if (ID === 8) {
        $(".Emperor_Palpatine").css({ "background-image": "url('assets/images/Emperor_Palpatine_Die.png')" });
    }
}
function reviveCharacter() {
    $(".Obi_Wan").css({ "background-image": "url('assets/images/Obi-Wan.png')" });
    $(".Luke_Skywalker").css({ "background-image": "url('assets/images/Luke_Skywalker.png')" });
    $(".Rey").css({ "background-image": "url('assets/images/Rey.png')" });
    $(".Master_Yoda").css({ "background-image": "url('assets/images/Master_Yoda.png')" });
    $(".Darth_Maul").css({ "background-image": "url('assets/images/Darth_Maul.png')" });
    $(".Darth_Vader").css({ "background-image": "url('assets/images/Darth_Vader.png')" });
    $(".Kylo_Ren").css({ "background-image": "url('assets/images/Kylo_Ren.png')" });
    $(".Emperor_Palpatine").css({ "background-image": "url('assets/images/Emperor_Palpatine.png')" });
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
    //fix row 2
    $("#lineOne").text("Choose a side");
    //fix row 3 - a
    $("#user_character").removeClass();
    $("#user_character").css({ "background-image": "" });
    $("#user_character").empty();
    //fix row 3 - b
    $("#user_status").empty();

    var bringImgback = $("<img>").attr("src", "assets/images/Sith_Logo_small.png");
    $("#user_status").append(bringImgback);
    var bringH3back = $("<h3>").addClass("downText").text("Sith");
    $("#user_status").append(bringH3back);

    $(".sith_logo").on("Click", pickSithCharacters());
    //fix row 3 - c
    $("#enemy_status").empty();

    var bringImgback2 = $("<img>").attr("src", "assets/images/Jedi_Logo_small.png");
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
        $("#lineTwo").text("Pick your character");
    });
    $(Jedi).on("click", function () {
        opacityChange(Sith);
        opacityNone(Jedi);
        pickJediCharacters();
        $("#lineTwo").text("Pick your character");
    });
    hideAllCharacters();
});
