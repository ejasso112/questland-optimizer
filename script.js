/*----------------------------------------------------------------------------------
-----------------------Set Local Storage - Current Active Tab-----------------------
----------------------------------------------------------------------------------*/
//Sets CSS for active section to display: block; and inactive sections to disply: none;.
//Gives attribute id="active" to active section and removes id attribute from inactive sections.
//Stores the active tab in localStorage var "active-tab" with instructions/optimize/about.
function activeTabInstructions() {
    document.getElementById("directions-section").style["display"] = "block"
    document.getElementById("optimize-section").style["display"] = "none"
    document.getElementById("about-section").style["display"] = "none"
    
    document.getElementsByTagName("a")[0].setAttribute("id", "active")
    document.getElementsByTagName("a")[1].removeAttribute("id")
    document.getElementsByTagName("a")[2].removeAttribute("id")

    localStorage.setItem("active-tab", "instructions")
}

function activeTabOptimize() {
    document.getElementById("directions-section").style["display"] = "none"
    document.getElementById("optimize-section").style["display"] = "block"
    document.getElementById("about-section").style["display"] = "none"

    document.getElementsByTagName("a")[0].removeAttribute("id")
    document.getElementsByTagName("a")[1].setAttribute("id", "active")
    document.getElementsByTagName("a")[2].removeAttribute("id")
    
    localStorage.setItem("active-tab", "optimize")
}

function activeTabAbout() {
    document.getElementById("directions-section").style["display"] = "none"
    document.getElementById("optimize-section").style["display"] = "none"
    document.getElementById("about-section").style["display"] = "block"

    document.getElementsByTagName("a")[0].removeAttribute("id")
    document.getElementsByTagName("a")[1].removeAttribute("id")
    document.getElementsByTagName("a")[2].setAttribute("id", "active")
    
    localStorage.setItem("active-tab", "about")
}

/*----------------------------------------------------------------------------------
-------------------------Set Local Storage - Current Inputs-------------------------
----------------------------------------------------------------------------------*/
/*---------------------------------Guild Bonuses----------------------------------*/
//Stores the guild-bonus in localStorage var "attack-guild-bonus" with inputed value.
function storeAttackGuildBonus() {
    localStorage.setItem("attack-guild-bonus", document.getElementById("attack-guild-bonus").value)
}
//Stores the guild-bonus in localStorage var "defense-guild-bonus" with inputed value.
function storeDefenseGuildBonus() {
    localStorage.setItem("defense-guild-bonus", document.getElementById("defense-guild-bonus").value)
}
//Stores the guild-bonus in localStorage var "health-guild-bonus" with inputed value.
function storeHealthGuildBonus() {
    localStorage.setItem("health-guild-bonus", document.getElementById("health-guild-bonus").value)
}
//Stores the guild-bonus in localStorage var "magic-guild-bonus" with inputed value.
function storeMaginGuildBonus() {
    localStorage.setItem("magic-guild-bonus", document.getElementById("magic-guild-bonus").value)
}

/*-------------------------Collection Percentages - Attck-------------------------*/
//Stores the collection-percentage in localStorage var "attack-1-percent" with inputed value.
function storeAttackPercent1() {
    localStorage.setItem("attack-1-percent", document.getElementById("attack-1-percent").value)
}
//Stores the collection-percentage in localStorage var "attack-2-percent" with inputed value.
function storeAttackPercent2() {
    localStorage.setItem("attack-2-percent", document.getElementById("attack-2-percent").value)
}
//Stores the collection-percentage in localStorage var "attack-3-percent" with inputed value.
function storeAttackPercent3() {
    localStorage.setItem("attack-3-percent", document.getElementById("attack-3-percent").value)
}
//Stores the collection-percentage in localStorage var "attack-4-percent" with inputed value.
function storeAttackPercent4() {
    localStorage.setItem("attack-4-percent", document.getElementById("attack-4-percent").value)
}
//Stores the collection-percentage in localStorage var "attack-5-percent" with inputed value.
function storeAttackPercent5() {
    localStorage.setItem("attack-5-percent", document.getElementById("attack-5-percent").value)
}

/*------------------------Collection Percentages - Defense------------------------*/
//Stores the collection-percentage in localStorage var "defense-1-percent" with inputed value.
function storeDefensePercent1() {
    localStorage.setItem("defense-1-percent", document.getElementById("defense-1-percent").value)
}
//Stores the collection-percentage in localStorage var "defense-2-percent" with inputed value.
function storeDefensePercent2() {
    localStorage.setItem("defense-2-percent", document.getElementById("defense-2-percent").value)
}
//Stores the collection-percentage in localStorage var "defense-3-percent" with inputed value.
function storeDefensePercent3() {
    localStorage.setItem("defense-3-percent", document.getElementById("defense-3-percent").value)
}
//Stores the collection-percentage in localStorage var "defense-4-percent" with inputed value.
function storeDefensePercent4() {
    localStorage.setItem("defense-4-percent", document.getElementById("defense-4-percent").value)
}
//Stores the collection-percentage in localStorage var "defense-5-percent" with inputed value.
function storeDefensePercent5() {
    localStorage.setItem("defense-5-percent", document.getElementById("defense-5-percent").value)
}

/*------------------------Collection Percentages - Health-------------------------*/
//Stores the collection-percentage in localStorage var "health-1-percent" with inputed value.
function storeHealthPercent1() {
    localStorage.setItem("health-1-percent", document.getElementById("health-1-percent").value)
}
//Stores the collection-percentage in localStorage var "health-2-percent" with inputed value.
function storeHealthPercent2() {
    localStorage.setItem("health-2-percent", document.getElementById("health-2-percent").value)
}
//Stores the collection-percentage in localStorage var "health-3-percent" with inputed value.
function storeHealthPercent3() {
    localStorage.setItem("health-3-percent", document.getElementById("health-3-percent").value)
}
//Stores the collection-percentage in localStorage var "health-4-percent" with inputed value.
function storeHealthPercent4() {
    localStorage.setItem("health-4-percent", document.getElementById("health-4-percent").value)
}
//Stores the collection-percentage in localStorage var "health-5-percent" with inputed value.
function storeHealthPercent5() {
    localStorage.setItem("health-5-percent", document.getElementById("health-5-percent").value)
}

/*-------------------------Collection Percentages - Magic-------------------------*/
//Stores the collection-percentage in localStorage var "magic-1-percent" with inputed value.
function storeMagicPercent1() {
    localStorage.setItem("magic-1-percent", document.getElementById("magic-1-percent").value)
}
//Stores the collection-percentage in localStorage var "magic-2-percent" with inputed value.
function storeMagicPercent2() {
    localStorage.setItem("magic-2-percent", document.getElementById("magic-2-percent").value)
}
//Stores the collection-percentage in localStorage var "magic-3-percent" with inputed value.
function storeMagicPercent3() {
    localStorage.setItem("magic-3-percent", document.getElementById("magic-3-percent").value)
}
//Stores the collection-percentage in localStorage var "magic-4-percent" with inputed value.
function storeMagicPercent4() {
    localStorage.setItem("magic-4-percent", document.getElementById("magic-4-percent").value)
}
//Stores the collection-percentage in localStorage var "magic-5-percent" with inputed value.
function storeMagicPercent5() {
    localStorage.setItem("magic-5-percent", document.getElementById("magic-5-percent").value)
}

/*-------------------------Collection Gear - Eqipped Gear-------------------------*/
//Stores the eqipped-gear in localStorage var "gear-piece-0" with selected value.
function storeGearPiece1() {
    localStorage.setItem("gear-piece-0", document.getElementsByClassName("gear")[0].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-1" with selected value.
function storeGearPiece2() {
    localStorage.setItem("gear-piece-1", document.getElementsByClassName("gear")[1].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-2" with selected value.
function storeGearPiece3() {
    localStorage.setItem("gear-piece-2", document.getElementsByClassName("gear")[2].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-3" with selected value.
function storeGearPiece4() {
    localStorage.setItem("gear-piece-3", document.getElementsByClassName("gear")[3].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-4" with selected value.
function storeGearPiece5() {
    localStorage.setItem("gear-piece-4", document.getElementsByClassName("gear")[4].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-5" with selected value.
function storeGearPiece6() {
    localStorage.setItem("gear-piece-5", document.getElementsByClassName("gear")[5].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-6" with selected value.
function storeGearPiece7() {
    localStorage.setItem("gear-piece-6", document.getElementsByClassName("gear")[6].value)
}

/*-----------------------Collection Gear - Collections Gear-----------------------*/
//Stores the eqipped-gear in localStorage var "gear-piece-7" with selected value.
function storeGearPiece8() {
    localStorage.setItem("gear-piece-7", document.getElementsByClassName("gear")[7].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-8" with selected value.
function storeGearPiece9() {
    localStorage.setItem("gear-piece-8", document.getElementsByClassName("gear")[8].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-9" with selected value.
function storeGearPiece10() {
    localStorage.setItem("gear-piece-9", document.getElementsByClassName("gear")[9].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-10" with selected value.
function storeGearPiece11() {
    localStorage.setItem("gear-piece-10", document.getElementsByClassName("gear")[10].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-11" with selected value.
function storeGearPiece12() {
    localStorage.setItem("gear-piece-11", document.getElementsByClassName("gear")[11].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-12" with selected value.
function storeGearPiece13() {
    localStorage.setItem("gear-piece-12", document.getElementsByClassName("gear")[12].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-13" with selected value.
function storeGearPiece14() {
    localStorage.setItem("gear-piece-13", document.getElementsByClassName("gear")[13].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-14" with selected value.
function storeGearPiece15() {
    localStorage.setItem("gear-piece-14", document.getElementsByClassName("gear")[14].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-15" with selected value.
function storeGearPiece16() {
    localStorage.setItem("gear-piece-15", document.getElementsByClassName("gear")[15].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-16" with selected value.
function storeGearPiece17() {
    localStorage.setItem("gear-piece-16", document.getElementsByClassName("gear")[16].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-17" with selected value.
function storeGearPiece18() {
    localStorage.setItem("gear-piece-17", document.getElementsByClassName("gear")[17].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-18" with selected value.
function storeGearPiece19() {
    localStorage.setItem("gear-piece-18", document.getElementsByClassName("gear")[18].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-19" with selected value.
function storeGearPiece20() {
    localStorage.setItem("gear-piece-19", document.getElementsByClassName("gear")[19].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-20" with selected value.
function storeGearPiece21() {
    localStorage.setItem("gear-piece-20", document.getElementsByClassName("gear")[20].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-21" with selected value.
function storeGearPiece22() {
    localStorage.setItem("gear-piece-21", document.getElementsByClassName("gear")[21].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-22" with selected value.
function storeGearPiece23() {
    localStorage.setItem("gear-piece-22", document.getElementsByClassName("gear")[22].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-23" with selected value.
function storeGearPiece24() {
    localStorage.setItem("gear-piece-23", document.getElementsByClassName("gear")[23].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-24" with selected value.
function storeGearPiece25() {
    localStorage.setItem("gear-piece-24", document.getElementsByClassName("gear")[24].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-25" with selected value.
function storeGearPiece26() {
    localStorage.setItem("gear-piece-25", document.getElementsByClassName("gear")[25].value)
}
//Stores the eqipped-gear in localStorage var "gear-piece-26" with selected value.
function storeGearPiece27() {
    localStorage.setItem("gear-piece-26", document.getElementsByClassName("gear")[26].value)
}

/*-------------------------Collection Gear - Awake Level--------------------------*/
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-1-awake" with inputed value.
function storeCollectionAwakeLv1() {
    localStorage.setItem("collection-gear-1-awake", document.getElementById("collection-gear-1-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-2-awake" with inputed value.
function storeCollectionAwakeLv2() {
    localStorage.setItem("collection-gear-2-awake", document.getElementById("collection-gear-2-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-3-awake" with inputed value.
function storeCollectionAwakeLv3() {
    localStorage.setItem("collection-gear-3-awake", document.getElementById("collection-gear-3-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-4-awake" with inputed value.
function storeCollectionAwakeLv4() {
    localStorage.setItem("collection-gear-4-awake", document.getElementById("collection-gear-4-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-5-awake" with inputed value.
function storeCollectionAwakeLv5() {
    localStorage.setItem("collection-gear-5-awake", document.getElementById("collection-gear-5-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-6-awake" with inputed value.
function storeCollectionAwakeLv6() {
    localStorage.setItem("collection-gear-6-awake", document.getElementById("collection-gear-6-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-7-awake" with inputed value.
function storeCollectionAwakeLv7() {
    localStorage.setItem("collection-gear-7-awake", document.getElementById("collection-gear-7-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-8-awake" with inputed value.
function storeCollectionAwakeLv8() {
    localStorage.setItem("collection-gear-8-awake", document.getElementById("collection-gear-8-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-9-awake" with inputed value.
function storeCollectionAwakeLv9() {
    localStorage.setItem("collection-gear-9-awake", document.getElementById("collection-gear-9-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-10-awake" with inputed value.
function storeCollectionAwakeLv10() {
    localStorage.setItem("collection-gear-10-awake", document.getElementById("collection-gear-10-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-11-awake" with inputed value.
function storeCollectionAwakeLv11() {
    localStorage.setItem("collection-gear-11-awake", document.getElementById("collection-gear-11-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-12-awake" with inputed value.
function storeCollectionAwakeLv12() {
    localStorage.setItem("collection-gear-12-awake", document.getElementById("collection-gear-12-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-13-awake" with inputed value.
function storeCollectionAwakeLv13() {
    localStorage.setItem("collection-gear-13-awake", document.getElementById("collection-gear-13-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-14-awake" with inputed value.
function storeCollectionAwakeLv14() {
    localStorage.setItem("collection-gear-14-awake", document.getElementById("collection-gear-14-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-15-awake" with inputed value.
function storeCollectionAwakeLv15() {
    localStorage.setItem("collection-gear-15-awake", document.getElementById("collection-gear-15-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-16-awake" with inputed value.
function storeCollectionAwakeLv16() {
    localStorage.setItem("collection-gear-16-awake", document.getElementById("collection-gear-16-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-17-awake" with inputed value.
function storeCollectionAwakeLv17() {
    localStorage.setItem("collection-gear-17-awake", document.getElementById("collection-gear-17-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-18-awake" with inputed value.
function storeCollectionAwakeLv18() {
    localStorage.setItem("collection-gear-18-awake", document.getElementById("collection-gear-18-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-19-awake" with inputed value.
function storeCollectionAwakeLv19() {
    localStorage.setItem("collection-gear-19-awake", document.getElementById("collection-gear-19-awake").value)
}
//Stores the collection-gear-awake-lv in localStorage var "collection-gear-20-awake" with inputed value.
function storeCollectionAwakeLv20() {
    localStorage.setItem("collection-gear-20-awake", document.getElementById("collection-gear-20-awake").value)
}

/*-------------------------Collection Gear - Boost Level--------------------------*/
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-1-boost" with inputed value.
function storeCollectionBoostLv1() {
    localStorage.setItem("collection-gear-1-boost", document.getElementById("collection-gear-1-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-2-boost" with inputed value.
function storeCollectionBoostLv2() {
    localStorage.setItem("collection-gear-2-boost", document.getElementById("collection-gear-2-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-3-boost" with inputed value.
function storeCollectionBoostLv3() {
    localStorage.setItem("collection-gear-3-boost", document.getElementById("collection-gear-3-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-4-boost" with inputed value.
function storeCollectionBoostLv4() {
    localStorage.setItem("collection-gear-4-boost", document.getElementById("collection-gear-4-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-5-boost" with inputed value.
function storeCollectionBoostLv5() {
    localStorage.setItem("collection-gear-5-boost", document.getElementById("collection-gear-5-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-6-boost" with inputed value.
function storeCollectionBoostLv6() {
    localStorage.setItem("collection-gear-6-boost", document.getElementById("collection-gear-6-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-7-boost" with inputed value.
function storeCollectionBoostLv7() {
    localStorage.setItem("collection-gear-7-boost", document.getElementById("collection-gear-7-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-8-boost" with inputed value.
function storeCollectionBoostLv8() {
    localStorage.setItem("collection-gear-8-boost", document.getElementById("collection-gear-8-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-9-boost" with inputed value.
function storeCollectionBoostLv9() {
    localStorage.setItem("collection-gear-9-boost", document.getElementById("collection-gear-9-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-10-boost" with inputed value.
function storeCollectionBoostLv10() {
    localStorage.setItem("collection-gear-10-boost", document.getElementById("collection-gear-10-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-11-boost" with inputed value.
function storeCollectionBoostLv11() {
    localStorage.setItem("collection-gear-11-boost", document.getElementById("collection-gear-11-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-12-boost" with inputed value.
function storeCollectionBoostLv12() {
    localStorage.setItem("collection-gear-12-boost", document.getElementById("collection-gear-12-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-13-boost" with inputed value.
function storeCollectionBoostLv13() {
    localStorage.setItem("collection-gear-13-boost", document.getElementById("collection-gear-13-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-14-boost" with inputed value.
function storeCollectionBoostLv14() {
    localStorage.setItem("collection-gear-14-boost", document.getElementById("collection-gear-14-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-15-boost" with inputed value.
function storeCollectionBoostLv15() {
    localStorage.setItem("collection-gear-15-boost", document.getElementById("collection-gear-15-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-16-boost" with inputed value.
function storeCollectionBoostLv16() {
    localStorage.setItem("collection-gear-16-boost", document.getElementById("collection-gear-16-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-17-boost" with inputed value.
function storeCollectionBoostLv17() {
    localStorage.setItem("collection-gear-17-boost", document.getElementById("collection-gear-17-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-18-boost" with inputed value.
function storeCollectionBoostLv18() {
    localStorage.setItem("collection-gear-18-boost", document.getElementById("collection-gear-18-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-19-boost" with inputed value.
function storeCollectionBoostLv19() {
    localStorage.setItem("collection-gear-19-boost", document.getElementById("collection-gear-19-boost").value)
}
//Stores the collection-gear-boost-lv in localStorage var "collection-gear-20-boost" with inputed value.
function storeCollectionBoostLv20() {
    localStorage.setItem("collection-gear-20-boost", document.getElementById("collection-gear-20-boost").value)
}
/*----------------------------------------------------------------------------------
-----------------------Get Local Storage - Current Active Tab-----------------------
----------------------------------------------------------------------------------*/
//Gets the stored active tab from localStorage var "active-tab" onLoad.
//Runs and activeTab function to disply proper tab onLoad.
//Chages body CSS visibility from hidden to visible for seemless onLoad active tab transition.
function onLoadTab() {
    currTab = localStorage.getItem("active-tab")

    if (currTab == "optimize") {
        activeTabOptimize()
    }
    else if (currTab == "about") {
        activeTabAbout()
    }
    else{
        activeTabInstructions()
    }

    document.getElementsByTagName("body")[0].style["visibility"] = "visible"
}

/*----------------------------------------------------------------------------------
-------------------------Get Local Storage - Current Inputs-------------------------
----------------------------------------------------------------------------------*/
//Gets the stored values of the guild-bonuses to display on screen onLoad
function onLoadGuildBonuses() {
    if(localStorage.getItem("attack-guild-bonus"))
        document.getElementById("attack-guild-bonus").value = localStorage.getItem("attack-guild-bonus")
    if(localStorage.getItem("defense-guild-bonus"))
        document.getElementById("defense-guild-bonus").value = localStorage.getItem("defense-guild-bonus")
    if(localStorage.getItem("health-guild-bonus"))
        document.getElementById("health-guild-bonus").value = localStorage.getItem("health-guild-bonus")
    if(localStorage.getItem("magic-guild-bonus"))
        document.getElementById("magic-guild-bonus").value = localStorage.getItem("magic-guild-bonus")
}

//Gets the stored values of the collection-percentages to display on screen onLoad
function onLoadCollectionPercentages(){
    if(localStorage.getItem("attack-1-percent"))
        document.getElementById("attack-1-percent").value = localStorage.getItem("attack-1-percent")
    if(localStorage.getItem("attack-2-percent"))
        document.getElementById("attack-2-percent").value = localStorage.getItem("attack-2-percent")
    if(localStorage.getItem("attack-3-percent"))
        document.getElementById("attack-3-percent").value = localStorage.getItem("attack-3-percent")
    if(localStorage.getItem("attack-4-percent"))
        document.getElementById("attack-4-percent").value = localStorage.getItem("attack-4-percent")
    if(localStorage.getItem("attack-5-percent"))
        document.getElementById("attack-5-percent").value = localStorage.getItem("attack-5-percent")
    
    if(localStorage.getItem("defense-1-percent"))
        document.getElementById("defense-1-percent").value = localStorage.getItem("defense-1-percent")
    if(localStorage.getItem("defense-2-percent"))
        document.getElementById("defense-2-percent").value = localStorage.getItem("defense-2-percent")
    if(localStorage.getItem("defense-3-percent"))
        document.getElementById("defense-3-percent").value = localStorage.getItem("defense-3-percent")
    if(localStorage.getItem("defense-4-percent"))
        document.getElementById("defense-4-percent").value = localStorage.getItem("defense-4-percent")
    if(localStorage.getItem("defense-5-percent"))
        document.getElementById("defense-5-percent").value = localStorage.getItem("defense-5-percent")

    if(localStorage.getItem("health-1-percent"))
        document.getElementById("health-1-percent").value = localStorage.getItem("health-1-percent")
    if(localStorage.getItem("health-2-percent"))
        document.getElementById("health-2-percent").value = localStorage.getItem("health-2-percent")
    if(localStorage.getItem("health-3-percent"))
        document.getElementById("health-3-percent").value = localStorage.getItem("health-3-percent")
    if(localStorage.getItem("health-4-percent"))
        document.getElementById("health-4-percent").value = localStorage.getItem("health-4-percent")
    if(localStorage.getItem("health-5-percent"))
        document.getElementById("health-5-percent").value = localStorage.getItem("health-5-percent")
    
    if(localStorage.getItem("magic-1-percent"))
        document.getElementById("magic-1-percent").value = localStorage.getItem("magic-1-percent")
    if(localStorage.getItem("magic-2-percent"))
        document.getElementById("magic-2-percent").value = localStorage.getItem("magic-2-percent")
    if(localStorage.getItem("magic-3-percent"))
        document.getElementById("magic-3-percent").value = localStorage.getItem("magic-3-percent")
    if(localStorage.getItem("magic-4-percent"))
        document.getElementById("magic-4-percent").value = localStorage.getItem("magic-4-percent")
    if(localStorage.getItem("magic-5-percent"))
        document.getElementById("magic-5-percent").value = localStorage.getItem("magic-5-percent")
}

//Gets the stored values of the gear to display on screen onLoad
function onLoadGear() {
    if(localStorage.getItem("gear-piece-0"))
        document.getElementsByClassName("gear")[0].value = localStorage.getItem("gear-piece-0")
    if(localStorage.getItem("gear-piece-1"))
        document.getElementsByClassName("gear")[1].value = localStorage.getItem("gear-piece-1")
    if(localStorage.getItem("gear-piece-2"))
        document.getElementsByClassName("gear")[2].value = localStorage.getItem("gear-piece-2")
    if(localStorage.getItem("gear-piece-3"))
        document.getElementsByClassName("gear")[3].value = localStorage.getItem("gear-piece-3")
    if(localStorage.getItem("gear-piece-4"))
        document.getElementsByClassName("gear")[4].value = localStorage.getItem("gear-piece-4")
    if(localStorage.getItem("gear-piece-5"))
        document.getElementsByClassName("gear")[5].value = localStorage.getItem("gear-piece-5")
    if(localStorage.getItem("gear-piece-6"))
        document.getElementsByClassName("gear")[6].value = localStorage.getItem("gear-piece-6")
    
    if(localStorage.getItem("gear-piece-7"))
        document.getElementsByClassName("gear")[7].value = localStorage.getItem("gear-piece-7")
    if(localStorage.getItem("gear-piece-8"))
        document.getElementsByClassName("gear")[8].value = localStorage.getItem("gear-piece-8")
    if(localStorage.getItem("gear-piece-9"))
        document.getElementsByClassName("gear")[9].value = localStorage.getItem("gear-piece-9")
    if(localStorage.getItem("gear-piece-10"))
        document.getElementsByClassName("gear")[10].value = localStorage.getItem("gear-piece-10")
    if(localStorage.getItem("gear-piece-11"))
        document.getElementsByClassName("gear")[11].value = localStorage.getItem("gear-piece-11")
    if(localStorage.getItem("gear-piece-12"))
        document.getElementsByClassName("gear")[12].value = localStorage.getItem("gear-piece-12")
    if(localStorage.getItem("gear-piece-13"))
        document.getElementsByClassName("gear")[13].value = localStorage.getItem("gear-piece-13")
    if(localStorage.getItem("gear-piece-14"))
        document.getElementsByClassName("gear")[14].value = localStorage.getItem("gear-piece-14")
    if(localStorage.getItem("gear-piece-15"))
        document.getElementsByClassName("gear")[15].value = localStorage.getItem("gear-piece-15")
    if(localStorage.getItem("gear-piece-16"))
        document.getElementsByClassName("gear")[16].value = localStorage.getItem("gear-piece-16")
    if(localStorage.getItem("gear-piece-17"))
        document.getElementsByClassName("gear")[17].value = localStorage.getItem("gear-piece-17")
    if(localStorage.getItem("gear-piece-18"))
        document.getElementsByClassName("gear")[18].value = localStorage.getItem("gear-piece-18")
    if(localStorage.getItem("gear-piece-19"))
        document.getElementsByClassName("gear")[19].value = localStorage.getItem("gear-piece-19")
    if(localStorage.getItem("gear-piece-20"))
        document.getElementsByClassName("gear")[20].value = localStorage.getItem("gear-piece-20")
    if(localStorage.getItem("gear-piece-21"))
        document.getElementsByClassName("gear")[21].value = localStorage.getItem("gear-piece-21")
    if(localStorage.getItem("gear-piece-22"))
        document.getElementsByClassName("gear")[22].value = localStorage.getItem("gear-piece-22")
    if(localStorage.getItem("gear-piece-23"))
        document.getElementsByClassName("gear")[23].value = localStorage.getItem("gear-piece-23")
    if(localStorage.getItem("gear-piece-24"))
        document.getElementsByClassName("gear")[24].value = localStorage.getItem("gear-piece-24")
    if(localStorage.getItem("gear-piece-25"))
        document.getElementsByClassName("gear")[25].value = localStorage.getItem("gear-piece-25")
    if(localStorage.getItem("gear-piece-26"))
        document.getElementsByClassName("gear")[26].value = localStorage.getItem("gear-piece-26")

    gearUpdater()
}

//Gets the stored values of the gear-awake-lv to display on screen onLoad
function onLoadAwakeLv() {
    if(localStorage.getItem("collection-gear-1-awake"))
        document.getElementById("collection-gear-1-awake").value = localStorage.getItem("collection-gear-1-awake")
    if(localStorage.getItem("collection-gear-2-awake"))
        document.getElementById("collection-gear-2-awake").value = localStorage.getItem("collection-gear-2-awake")
    if(localStorage.getItem("collection-gear-3-awake"))
        document.getElementById("collection-gear-3-awake").value = localStorage.getItem("collection-gear-3-awake")
    if(localStorage.getItem("collection-gear-4-awake"))
        document.getElementById("collection-gear-4-awake").value = localStorage.getItem("collection-gear-4-awake")
    if(localStorage.getItem("collection-gear-5-awake"))
        document.getElementById("collection-gear-5-awake").value = localStorage.getItem("collection-gear-5-awake")
    if(localStorage.getItem("collection-gear-6-awake"))
        document.getElementById("collection-gear-6-awake").value = localStorage.getItem("collection-gear-6-awake")
    if(localStorage.getItem("collection-gear-7-awake"))
        document.getElementById("collection-gear-7-awake").value = localStorage.getItem("collection-gear-7-awake")
    if(localStorage.getItem("collection-gear-8-awake"))
        document.getElementById("collection-gear-8-awake").value = localStorage.getItem("collection-gear-8-awake")
    if(localStorage.getItem("collection-gear-9-awake"))
        document.getElementById("collection-gear-9-awake").value = localStorage.getItem("collection-gear-9-awake")
    if(localStorage.getItem("collection-gear-10-awake"))
        document.getElementById("collection-gear-10-awake").value = localStorage.getItem("collection-gear-10-awake")
    if(localStorage.getItem("collection-gear-11-awake"))
        document.getElementById("collection-gear-11-awake").value = localStorage.getItem("collection-gear-11-awake")
    if(localStorage.getItem("collection-gear-12-awake"))
        document.getElementById("collection-gear-12-awake").value = localStorage.getItem("collection-gear-12-awake")
    if(localStorage.getItem("collection-gear-13-awake"))
        document.getElementById("collection-gear-13-awake").value = localStorage.getItem("collection-gear-13-awake")
    if(localStorage.getItem("collection-gear-14-awake"))
        document.getElementById("collection-gear-14-awake").value = localStorage.getItem("collection-gear-14-awake")
    if(localStorage.getItem("collection-gear-15-awake"))
        document.getElementById("collection-gear-15-awake").value = localStorage.getItem("collection-gear-15-awake")
    if(localStorage.getItem("collection-gear-16-awake"))
        document.getElementById("collection-gear-16-awake").value = localStorage.getItem("collection-gear-16-awake")
    if(localStorage.getItem("collection-gear-17-awake"))
        document.getElementById("collection-gear-17-awake").value = localStorage.getItem("collection-gear-17-awake")
    if(localStorage.getItem("collection-gear-18-awake"))
        document.getElementById("collection-gear-18-awake").value = localStorage.getItem("collection-gear-18-awake")
    if(localStorage.getItem("collection-gear-19-awake"))
        document.getElementById("collection-gear-19-awake").value = localStorage.getItem("collection-gear-19-awake")
    if(localStorage.getItem("collection-gear-20-awake"))
        document.getElementById("collection-gear-20-awake").value = localStorage.getItem("collection-gear-20-awake")
}

//Gets the stored values of the gear-boost-lv to display on screen onLoad
function onLoadBoostLv() {
    if(localStorage.getItem("collection-gear-1-boost"))
        document.getElementById("collection-gear-1-boost").value = localStorage.getItem("collection-gear-1-boost")
    if(localStorage.getItem("collection-gear-2-boost"))
        document.getElementById("collection-gear-2-boost").value = localStorage.getItem("collection-gear-2-boost")
    if(localStorage.getItem("collection-gear-3-boost"))
        document.getElementById("collection-gear-3-boost").value = localStorage.getItem("collection-gear-3-boost")
    if(localStorage.getItem("collection-gear-4-boost"))
        document.getElementById("collection-gear-4-boost").value = localStorage.getItem("collection-gear-4-boost")
    if(localStorage.getItem("collection-gear-5-boost"))
        document.getElementById("collection-gear-5-boost").value = localStorage.getItem("collection-gear-5-boost")
    if(localStorage.getItem("collection-gear-6-boost"))
        document.getElementById("collection-gear-6-boost").value = localStorage.getItem("collection-gear-6-boost")
    if(localStorage.getItem("collection-gear-7-boost"))
        document.getElementById("collection-gear-7-boost").value = localStorage.getItem("collection-gear-7-boost")
    if(localStorage.getItem("collection-gear-8-boost"))
        document.getElementById("collection-gear-8-boost").value = localStorage.getItem("collection-gear-8-boost")
    if(localStorage.getItem("collection-gear-9-boost"))
        document.getElementById("collection-gear-9-boost").value = localStorage.getItem("collection-gear-9-boost")
    if(localStorage.getItem("collection-gear-10-boost"))
        document.getElementById("collection-gear-10-boost").value = localStorage.getItem("collection-gear-10-boost")
    if(localStorage.getItem("collection-gear-11-boost"))
        document.getElementById("collection-gear-11-boost").value = localStorage.getItem("collection-gear-11-boost")
    if(localStorage.getItem("collection-gear-12-boost"))
        document.getElementById("collection-gear-12-boost").value = localStorage.getItem("collection-gear-12-boost")
    if(localStorage.getItem("collection-gear-13-boost"))
        document.getElementById("collection-gear-13-boost").value = localStorage.getItem("collection-gear-13-boost")
    if(localStorage.getItem("collection-gear-14-boost"))
        document.getElementById("collection-gear-14-boost").value = localStorage.getItem("collection-gear-14-boost")
    if(localStorage.getItem("collection-gear-15-boost"))
        document.getElementById("collection-gear-15-boost").value = localStorage.getItem("collection-gear-15-boost")
    if(localStorage.getItem("collection-gear-16-boost"))
        document.getElementById("collection-gear-16-boost").value = localStorage.getItem("collection-gear-16-boost")
    if(localStorage.getItem("collection-gear-17-boost"))
        document.getElementById("collection-gear-17-boost").value = localStorage.getItem("collection-gear-17-boost")
    if(localStorage.getItem("collection-gear-18-boost"))
        document.getElementById("collection-gear-18-boost").value = localStorage.getItem("collection-gear-18-boost")
    if(localStorage.getItem("collection-gear-19-boost"))
        document.getElementById("collection-gear-19-boost").value = localStorage.getItem("collection-gear-19-boost")
    if(localStorage.getItem("collection-gear-20-boost"))
        document.getElementById("collection-gear-20-boost").value = localStorage.getItem("collection-gear-20-boost")
}

/*----------------------------------------------------------------------------------
-----------------------Diplsy JSON to select options in HTML------------------------
----------------------------------------------------------------------------------*/
/* Function thats sorts Gear json file in alpabetical order */
function sortByProperty(property){
    return function(a,b){
        if(a[property] > b[property])
            return 1;
        else if(a[property] < b[property])
            return -1;
        return 0;
    }
}

/* Function that stores gear.json into json_data array */
json_data = []
function onLoadJsonData() {
    
    fetch('./gear.json')
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        json_data = data.Gear
        json_data.sort(sortByProperty("Name"))
        for (i = 0; i < json_data.length; i++) {
            currGear = json_data[i].Name
            doc_gear_select_array = document.getElementsByClassName("gear")
            for (l = 0; l < doc_gear_select_array.length; l++) {
                option = document.createElement("option")
                option.id = i
                option.text = currGear
                doc_gear_select_array[l].add(option)
            }
        }
        onLoadGear()
    })
}

/*----------------------------------------------------------------------------------
-------------------------------On Load Function Calls-------------------------------
----------------------------------------------------------------------------------*/
onLoadTab()
onLoadGuildBonuses()
onLoadCollectionPercentages()
onLoadAwakeLv()
onLoadBoostLv()
onLoadJsonData()

/*----------------------------------------------------------------------------------
--------------------------------Gear Setup Updater----------------------------------
----------------------------------------------------------------------------------*/
// Array to store seleceted gear pieces [Name, index in json_data]
setup_array = [
["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0],
["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0],
["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0], ["", 0]]
    
// Function that updates setup_array to hold current data
function gearUpdater(){
    console.log("Runing")
    get_gear = document.getElementsByClassName("gear")
    for (i = 0; i < get_gear.length; i++) {
        curr_gear_piece = get_gear[i].value
        curr_gear_index = get_gear[i].options[get_gear[i].selectedIndex].id
        if(curr_gear_piece != "" && curr_gear_piece != setup_array[i][0]) {
            setup_array[i][0] = curr_gear_piece
            setup_array[i][1] = curr_gear_index
            gearStatsUpdater(i, curr_gear_index)
        }
    }
}

/*----------------------------------------------------------------------------------
--------------------------------Gear Stats Updater----------------------------------
----------------------------------------------------------------------------------*/
// 2D array that stores all the stats of a gear piece in the associated index
setup_stats = [
[0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""],
[0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""],
[0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""], [0, 0, 0, 0, "", "", "", ""]]

/* Function that updates the setup_stats array (index of curr gear piece in the setup_array, 
index of curr gear piece in the json_data array) */
function gearStatsUpdater(setup_pos, data_pos) {
    setup_stats[setup_pos][0] = parseInt(json_data[data_pos].Health)
    setup_stats[setup_pos][1] = parseInt(json_data[data_pos].Attack)
    setup_stats[setup_pos][2] = parseInt(json_data[data_pos].Defense)
    setup_stats[setup_pos][3] = parseInt(json_data[data_pos].Magic)
    setup_stats[setup_pos][4] = json_data[data_pos].Link_1
    setup_stats[setup_pos][5] = json_data[data_pos].Link_2
    setup_stats[setup_pos][6] = json_data[data_pos].Link_3
    setup_stats[setup_pos][7] = json_data[data_pos].Boost
    linkConnectionUpdater()
}

link_count_array = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
function linkConnectionUpdater() {
    for (curr_gear_index = 0; curr_gear_index < setup_array.length; curr_gear_index++) {
        links= 0
        if(setup_array[curr_gear_index][0] != ""){
            for(other_gear_index = 0; other_gear_index < setup_array.length; other_gear_index++){
                if(setup_array[other_gear_index][0] != "") {
                    if(setup_array[other_gear_index][0] == setup_stats[curr_gear_index][4])
                        links += 1
                    if(setup_array[other_gear_index][0] == setup_stats[curr_gear_index][5])
                        links += 1
                    if(setup_array[other_gear_index][0] == setup_stats[curr_gear_index][6])
                        links += 1
                }
            }
        }
        link_set = document.getElementsByClassName("output")[curr_gear_index]
        link_set.innerHTML = links
        link_count_array[curr_gear_index] = links   
    }
}

/*----------------------------------------------------------------------------------
-------------------------------Guild Bonus Updater----------------------------------
----------------------------------------------------------------------------------*/
//Variables to store the guild health, aattck, defense, and magic boost percentages
guild_health_bonus = 0
gulid_attack_bonus = 0
guild_defense_bonus = 0
guild_magic_bonus = 0

// Function that updates the guild boost percentages
function guildBonusesUpdater() {
    guild_health_bonus = document.getElementById("health-guild-bonus").value / 100
    gulid_attack_bonus = document.getElementById("attack-guild-bonus").value / 100
    guild_defense_bonus = document.getElementById("defense-guild-bonus").value / 100
    guild_magic_bonus = document.getElementById("magic-guild-bonus").value / 100
}


/*----------------------------------------------------------------------------------
-----------------------------Collection Bonus Updater-------------------------------
----------------------------------------------------------------------------------*/
// Arrays to store collections health, aattck, defense, and magic boost percentages
collection_percentage_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Function that updates the collection boost percentages
function collectionsBonusUpdater() {
    health_1_percent = document.getElementById("health-1-percent").value / 100
    health_2_percent = document.getElementById("health-2-percent").value / 100
    health_3_percent = document.getElementById("health-3-percent").value / 100
    health_4_percent = document.getElementById("health-4-percent").value / 100
    health_5_percent = document.getElementById("health-5-percent").value / 100
    attack_1_percent = document.getElementById("attack-1-percent").value / 100
    attack_2_percent = document.getElementById("attack-2-percent").value / 100
    attack_3_percent = document.getElementById("attack-3-percent").value / 100
    attack_4_percent = document.getElementById("attack-4-percent").value / 100
    attack_5_percent = document.getElementById("attack-5-percent").value / 100
    defense_1_percent = document.getElementById("defense-1-percent").value / 100
    defense_2_percent = document.getElementById("defense-2-percent").value / 100
    defense_3_percent = document.getElementById("defense-3-percent").value / 100
    defense_4_percent = document.getElementById("defense-4-percent").value / 100
    defense_5_percent = document.getElementById("defense-5-percent").value / 100
    magic_1_percent = document.getElementById("magic-1-percent").value / 100
    magic_2_percent = document.getElementById("magic-2-percent").value / 100
    magic_3_percent = document.getElementById("magic-3-percent").value / 100
    magic_4_percent = document.getElementById("magic-4-percent").value / 100
    magic_5_percent = document.getElementById("magic-5-percent").value / 100
    collection_percentage_array = [
        health_1_percent, health_2_percent, health_3_percent, health_4_percent, health_5_percent,
        attack_1_percent, attack_2_percent, attack_3_percent, attack_4_percent, attack_5_percent,
        defense_1_percent, defense_2_percent, defense_3_percent, defense_4_percent, defense_5_percent,
        magic_1_percent, magic_2_percent, magic_3_percent, magic_4_percent, magic_5_percent
    ]
}
awake_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function awakeUpdater(){
    get_awake_lv = document.getElementsByClassName("awake-lv")

    for (i = 0; i < get_awake_lv.length; i++) {
        curr_awake_lv = get_awake_lv[i].value
        if (awake_array[i] != curr_awake_lv) {
            awake_array[i] = parseInt(curr_awake_lv)
        }
    }
    awakeStatsCalculator()
}

boost_array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
function boostUpdater(){
    get_boost_lv = document.getElementsByClassName("boost-lv")

    for (i = 0; i < get_boost_lv.length; i++) {
        curr_boost_lv = get_boost_lv[i].value
        if (boost_array[i] != curr_boost_lv) {
            boost_array[i] = parseInt(curr_boost_lv)
        }
    }
    boostStatsCalculator()
}

//setup stats
//awake array
gear_awake_stats_array = [
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

function awakeStatsCalculator(){
    for (i = 0; i < setup_array.length; i++){
        if (setup_array[i][0] != ""){
            this_awake_lv = awake_array[i]
            gear_awake_stats_array[i][0] = setup_stats[i][0] * (1.20)**(this_awake_lv)
            gear_awake_stats_array[i][1] = setup_stats[i][1] * (1.20)**(this_awake_lv)
            gear_awake_stats_array[i][2] = setup_stats[i][2] * (1.20)**(this_awake_lv)
            gear_awake_stats_array[i][3] = setup_stats[i][3] * (1.20)**(this_awake_lv)
        }
    }
}

gear_boost_stats_array = [
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    
function boostStatsCalculator(){
    for (i = 0; i < setup_array.length; i++){
        if (setup_array[i][0] != ""){
            this_awake_lv = awake_array[i]
            this_boost_lv = boost_array[i]
            if (this_awake_lv == 0)
                boost_mult = 1.002
            else
                boost_mult = 1.002 + this_awake_lv/1000

            gear_boost_stats_array[i][0] = gear_awake_stats_array[i][0] * (boost_mult)**(this_boost_lv - 1)
            gear_boost_stats_array[i][1] = gear_awake_stats_array[i][1] * (boost_mult)**(this_boost_lv - 1)
            gear_boost_stats_array[i][2] = gear_awake_stats_array[i][2] * (boost_mult)**(this_boost_lv - 1)
            gear_boost_stats_array[i][3] = gear_awake_stats_array[i][3] * (boost_mult)**(this_boost_lv - 1)
        }
    }
}

link_boost_stats_array = [
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],
[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        
function linkStatsCalculator(){
    for (i = 0; i < setup_array.length; i++){
        if (setup_array[i][0] != ""){
            this_boost_name = setup_stats[i][7]

            if (this_boost_name == "HEALTH" && link_count_array[i] > 1){
                link_boost_stats_array[i][0] = Math.round(gear_boost_stats_array[i][0] * 1.3)
                link_boost_stats_array[i][1] = Math.round(gear_boost_stats_array[i][1])
                link_boost_stats_array[i][2] = Math.round(gear_boost_stats_array[i][2])
                link_boost_stats_array[i][3] = Math.round(gear_boost_stats_array[i][3])
            }
            else if (this_boost_name == "ATTACK" && link_count_array[i] > 1){
                link_boost_stats_array[i][0] = Math.round(gear_boost_stats_array[i][0])
                link_boost_stats_array[i][1] = Math.round(gear_boost_stats_array[i][1] * 1.3)
                link_boost_stats_array[i][2] = Math.round(gear_boost_stats_array[i][2])
                link_boost_stats_array[i][3] = Math.round(gear_boost_stats_array[i][3])
            }
            else if (this_boost_name == "DEFENSE" && link_count_array[i] > 1){
                link_boost_stats_array[i][0] = Math.round(gear_boost_stats_array[i][0])
                link_boost_stats_array[i][1] = Math.round(gear_boost_stats_array[i][1])
                link_boost_stats_array[i][2] = Math.round(gear_boost_stats_array[i][2] * 1.3)
                link_boost_stats_array[i][3] = Math.round(gear_boost_stats_array[i][3])
            }
            else if (this_boost_name == "MAGIC" && link_count_array[i] > 1){
                link_boost_stats_array[i][0] = Math.round(gear_boost_stats_array[i][0])
                link_boost_stats_array[i][1] = Math.round(gear_boost_stats_array[i][1])
                link_boost_stats_array[i][2] = Math.round(gear_boost_stats_array[i][2])
                link_boost_stats_array[i][3] = Math.round(gear_boost_stats_array[i][3] * 1.3)
            }
            else {
                link_boost_stats_array[i][0] = Math.round(gear_boost_stats_array[i][0])
                link_boost_stats_array[i][1] = Math.round(gear_boost_stats_array[i][1])
                link_boost_stats_array[i][2] = Math.round(gear_boost_stats_array[i][2])
                link_boost_stats_array[i][3] = Math.round(gear_boost_stats_array[i][3])
            }
        }
    }
    console.log(link_boost_stats_array)
}

function gearOptimize(gear1_stats, gear2_stats, gear1_percent, gear2_percent, gear1_index, gear2_index, i, l, bool_){
    gear1_full = gear1_stats[gear1_index] * gear1_percent
    gear2_full = gear2_stats[gear2_index] * gear2_percent

    gear1_swap = gear1_stats[gear2_index] * gear2_percent
    gear2_swap = gear2_stats[gear1_index] * gear1_percent

    original_setup = gear1_full + gear2_full
    swapped_setup = gear1_swap + gear2_swap

    if(swapped_setup > original_setup){
        temp = link_boost_stats_array[i]
        link_boost_stats_array[i] = link_boost_stats_array[l]
        link_boost_stats_array[l] = temp

        temp2 = setup_array[i]
        setup_array[i] = setup_array[l]
        setup_array[l] = temp2
        return false
    }
    else return bool_
}

function opimizationCalculator(){
    are_same = false
    while(are_same != true) {
        are_same = true
        for(i = 7; i < link_boost_stats_array.length; i++){
            i_index = i - 7
            for(l = 7; l < link_boost_stats_array.length; l++){
                l_index = l - 7
                if(i_index < 5){
                    if(l_index < 5)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 0, 0, i, l, are_same)
                    else if(l_index < 10)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 0, 1, i, l, are_same)
                    else if(l_index < 15)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 0, 2, i, l, are_same)
                    else if(l_index < 20)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 0, 3, i, l, are_same)
                }
                else if(i_index < 10){
                    if(l_index < 5)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 1, 0, i, l, are_same)
                    else if(l_index < 10)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 1, 1, i, l, are_same)
                    else if(l_index < 15)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 1, 2, i, l, are_same)
                    else if(l_index < 20)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 1, 3, i, l, are_same)
                }
                else if(i_index < 15){
                    if(l_index < 5)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 2, 0, i, l, are_same)
                    else if(l_index < 10)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 2, 1, i, l, are_same)
                    else if(l_index < 15)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 2, 2, i, l, are_same)
                    else if(l_index < 20)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 2, 3, i, l, are_same)
                }
                else if(i_index < 20){
                    if(l_index < 5)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 3, 0, i, l, are_same)
                    else if(l_index < 10)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 3, 1, i, l, are_same)
                    else if(l_index < 15)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 3, 2, i, l, are_same)
                    else if(l_index < 20)
                        are_same = gearOptimize(link_boost_stats_array[i], link_boost_stats_array[l], collection_percentage_array[i_index], collection_percentage_array[l_index], 3, 3, i, l, are_same)
                }
            }
        }
    }
    console.log(link_boost_stats_array)
    console.log("collection 1:", "Health: ", link_boost_stats_array[7][0] + link_boost_stats_array[8][0] + link_boost_stats_array[9][0], " - Attack: ", link_boost_stats_array[12][1] + link_boost_stats_array[13][1], " - Defense: ", link_boost_stats_array[17][2] + link_boost_stats_array[18][2], " - Magic: ", link_boost_stats_array[22][3] + link_boost_stats_array[23][3] + link_boost_stats_array[24][3])
    console.log("collection 2:", "Health: ", link_boost_stats_array[10][0] + link_boost_stats_array[11][0] ," - Attack: ", link_boost_stats_array[14][1] + link_boost_stats_array[15][1] + link_boost_stats_array[16][1], " - Defense: ", link_boost_stats_array[19][2] + link_boost_stats_array[20][2] + link_boost_stats_array[21][2], " - Magic: ", link_boost_stats_array[25][3] + link_boost_stats_array[26][3])
    console.log(setup_array)

    document.getElementById("health-1-name").innerHTML = setup_array[7][0];
    document.getElementById("health-2-name").innerHTML = setup_array[8][0];
    document.getElementById("health-3-name").innerHTML = setup_array[9][0];
    document.getElementById("health-4-name").innerHTML = setup_array[10][0];
    document.getElementById("health-5-name").innerHTML = setup_array[11][0];

    document.getElementById("attack-1-name").innerHTML = setup_array[12][0];
    document.getElementById("attack-2-name").innerHTML = setup_array[13][0];
    document.getElementById("attack-3-name").innerHTML = setup_array[14][0];
    document.getElementById("attack-4-name").innerHTML = setup_array[15][0];
    document.getElementById("attack-5-name").innerHTML = setup_array[16][0];

    document.getElementById("defense-1-name").innerHTML = setup_array[17][0];
    document.getElementById("defense-2-name").innerHTML = setup_array[18][0];
    document.getElementById("defense-3-name").innerHTML = setup_array[19][0];
    document.getElementById("defense-4-name").innerHTML = setup_array[20][0];
    document.getElementById("defense-5-name").innerHTML = setup_array[21][0];

    document.getElementById("magic-1-name").innerHTML = setup_array[22][0];
    document.getElementById("magic-2-name").innerHTML = setup_array[23][0];
    document.getElementById("magic-3-name").innerHTML = setup_array[24][0];
    document.getElementById("magic-4-name").innerHTML = setup_array[25][0];
    document.getElementById("magic-5-name").innerHTML = setup_array[26][0];

}

function onClickOptimize() {
    guildBonusesUpdater()
    collectionsBonusUpdater()
    awakeUpdater()
    boostUpdater()
    linkStatsCalculator()
    opimizationCalculator()
}