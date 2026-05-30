import rakshasa from "./images/rakshasa.webp";
import druid from "./images/druid.webp";
import reaver from "./images/reaver.webp";
import stormcaster from "./images/stormcaster.webp";

const awaClass = [
    {
        name:"Rakshasa",
        base:"Martial Artist",
        image:rakshasa,
        quest1:'Talk to "Niez" (Viper\'s Forest)\nCollect "Inner Fire" x30 from "Heatbeast" (Meeryasha)\nCollect "Incandescent Stone" x10 from "Magmabeast Leader" (Meeryasha Elites)\nCollect "Hot-Hand Crystal" (Iceflame Highlands Fame Chest)',
        quest2:'',
        quest3:'Talk to "Slynn"\nDefeat "Slynn", you will fight him by talking to the merchant selling the quest in the Pantheon of Heroes\nCollect "Ascendancy Token" x10 which you can either trade for warstones or farm from quests sold by "Kaiser" in aven (455,355)',
        id:'0',
    },
    {
        name:"Stormcaster",
        base:"Magician",
        image:stormcaster,
        quest1:'',
        quest2:'',
        quest3:'Talk to "Lyssara"\nDefeat "Lyssara", you will fight her by talking to the merchant selling the quest in the Pantheon of Heroes\nCollect "Ascendancy Token" x10 which you can either trade for warstones or farm from quests sold by "Kaiser" in aven (455,355)',
        id:'1',
    },
    {
        name:"Druid",
        base:"Shaman",
        image:druid,
        quest1:'Talk to "Feda" (Ethereal Dome)\nDefeat "Primal Gorille"x99 (Skyreach Jungle)\nCollect "Specimen#44 Blood Sample" from "Specimen#44" (Trial 85 Occultus)\n Collect "Forest Guardian\'s Whistle" from Ethereal Dome Fame Chest\n Collect "Katus Hammer" from "Katus" in Camodor Chastelands Multiplayer',
        quest2:'Collect "Papineau\'s tusk" from "Papineau" in lv85 Trial Tranquill Hill\nCollect "Brown Bear King Skin" from "Cruel Brown Bear King", Elite monster from "Ethereal Dome"\nCollect "Tindilos\'s Fang" from "Blighted Tindilos" Goss Mountain\nDefeat Azure Crystal Octopus x50 in lv 85 trial "Tranquil Hill"\nCollect "Terracore". Buy the blueprint from "Jarroda", collect "Dragon Whisker Vine" from guild town farms, get the item sold by Lumaris "Glowing Fruit" and get the Druidic Stone from "Wee Rowan"',
        quest3:'Talk to "Lumaris"\nDefeat "Lumaris", you will fight her by talking to the merchant selling the quest in the Pantheon of Heroes\nCollect "Ascendancy Token" x10 which you can either trade for warstones or farm from quests sold by "Kaiser" in aven (455,355)',
        id:'2',
    },
    {
        name:"Reaver",
        base:"Inquisitor",
        image:reaver,
        quest1:'Collect "Lost Soul" x30 from "Roaming Soul" in lv80 Trial Guillotine\nCollect "Moon Scar Heroic Soul" x30 (Orange summons lv80)\nCollect "Grimghost Necklace" from fame chest in Eloise Plains\nCollect "Bloody Fang" from "Blighted Luisaka"',
        quest2:'Collect "Soul Harvester" from trial points\nCollect "Darphynius\' Entangled Soul" from "Darphynius" in lv85 Occultus trial\nCollect "Tormented Soul" using the "Soul Collector" from "Kaelthorn"\n Defeat "Graylin Shadow Guard" x66',
        quest3:'Talk to "Kaelthorn"\nDefeat "Kaelthorn", you will fight him by talking to the merchant selling the quest in the Pantheon of Heroes\nCollect "Ascendancy Token" x10 which you can either trade for warstones or farm from quests sold by "Kaiser" in aven (455,355)',
        id:'3',
    },
];

export default awaClass;