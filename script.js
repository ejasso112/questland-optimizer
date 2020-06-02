instructions = document.getElementById("directions-section")
optimize = document.getElementById("optimize-section")
about = document.getElementById("about-section")

function ActiveTabInstructions() {
    instructions.style["display"] = "block"
    document.getElementsByTagName("a")[0].setAttribute("id", "active")
    optimize.style["display"] = "none"
    document.getElementsByTagName("a")[1].removeAttribute("id")
    about.style["display"] = "none"
    document.getElementsByTagName("a")[2].removeAttribute("id")

    localStorage.setItem("active-tab", "instructions")
}

function ActiveTabOptimize() {
    instructions.style["display"] = "none"
    document.getElementsByTagName("a")[0].removeAttribute("id")
    optimize.style["display"] = "block"
    document.getElementsByTagName("a")[1].setAttribute("id", "active")
    about.style["display"] = "none"
    document.getElementsByTagName("a")[2].removeAttribute("id")
    
    localStorage.setItem("active-tab", "optimize")
}

function ActiveTabAbout() {
    instructions.style["display"] = "none"
    document.getElementsByTagName("a")[0].removeAttribute("id")
    optimize.style["display"] = "none"
    document.getElementsByTagName("a")[1].removeAttribute("id")
    about.style["display"] = "block"
    document.getElementsByTagName("a")[2].setAttribute("id", "active")
    
    localStorage.setItem("active-tab", "about")
}

function OnLoadTab() {
    currTab = localStorage.getItem("active-tab")

    if (currTab == "optimize") {
        ActiveTabOptimize()
    }
    else if (currTab == "about") {
        ActiveTabAbout()
    }
    else{
        ActiveTabInstructions()
    }

    document.getElementsByTagName("body")[0].style["visibility"] = "visible"
}
window.onload = OnLoadTab()

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
fetch('./gear.json').then(function(resp) {
    return resp.json();
})
.then(function(data) {
    json_data = data.Gear
    json_data.sort(sortByProperty("Name"))
    for (i = 0; i < json_data.length; i++) {
        currGear = json_data[i].Name
        x_array = document.getElementsByClassName("gear")
        for (l = 0; l < x_array.length; l++) {
            x = document.getElementsByClassName("gear")[l]
            option = document.createElement("option")
            option.id = i
            option.text = currGear
            x.add(option)
        }
    }
})


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
    get_gear = document.getElementsByClassName("gear")

    for (i = 0; i < get_gear.length; i++) {
        curr_gear_piece = get_gear[i].value
        curr_gear_index = get_gear[i].options[get_gear[i].selectedIndex].id
        if (curr_gear_piece != "" && setup_array[i][0] != curr_gear_piece) {
            setup_array[i][0] = curr_gear_piece
            setup_array[i][1] = curr_gear_index
            gearStatsUpdater(i, curr_gear_index)
            awakeStatsCalculator()
            boostStatsCalculator()
            linkStatsCalculator()
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
    boostStatsCalculator()
    linkStatsCalculator()
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
    linkStatsCalculator()
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
/*

function myFunction() {
    document.getElementById("results").innerHTML = "Health: " + health + '<br>' + "Attack: " + attack + '<br>' + "Defense: "+ defense + '<br>' + "Magic: "+ magic;
}
*/