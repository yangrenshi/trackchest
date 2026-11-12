import { ChestTypeInfo } from "@/types/chest";

export const CHEST_TYPES: ChestTypeInfo[] = [
  {
    id: "regular",
    name: "Standard Chest",
    shortName: "Standard",
    badge: "Most Common",
    rarity: "Common",
    color: "#EAB308", // Yellow / Gold
    bgGradient: "from-amber-500/10 to-yellow-600/5",
    borderColor: "border-amber-500/30",
    typicalLoot: "Guaranteed weapon, ammo, consumable, materials",
    oddsNote: "Standard 70-80% spawn rate across POIs",
  },
  {
    id: "rare",
    name: "Rare / Mythic Chest",
    shortName: "Rare/Mythic",
    badge: "Blue Glow",
    rarity: "Rare",
    color: "#3B82F6", // Blue
    bgGradient: "from-blue-500/10 to-indigo-600/5",
    borderColor: "border-blue-500/30",
    typicalLoot: "Guaranteed Blue/Purple/Gold weapon, high tier heals",
    oddsNote: "Approx. 2% to 5% upgrade chance over standard chests",
  },
  {
    id: "sprite",
    name: "Sprite / Elemental Chest",
    shortName: "Sprite",
    badge: "Elemental",
    rarity: "Epic",
    color: "#10B981", // Emerald
    bgGradient: "from-emerald-500/10 to-teal-600/5",
    borderColor: "border-emerald-500/30",
    typicalLoot: "Elemental shards, enhanced utility, rare weaponry",
    oddsNote: "Biomes and enchanted zones specific spawns",
  },
  {
    id: "pirate",
    name: "Pirate Chest (Token)",
    shortName: "Pirate/Token",
    badge: "Event / Token",
    rarity: "Special",
    color: "#F97316", // Orange
    bgGradient: "from-orange-500/10 to-amber-700/5",
    borderColor: "border-orange-500/30",
    typicalLoot: "Pirate medallions, cannon items, high gold value",
    oddsNote: "Requires map fragments or specific quest token triggers",
  },
  {
    id: "faction",
    name: "Faction / Vault Chest",
    shortName: "Vault",
    badge: "Keycard Required",
    rarity: "Mythic",
    color: "#A855F7", // Purple
    bgGradient: "from-purple-500/10 to-pink-600/5",
    borderColor: "border-purple-500/30",
    typicalLoot: "Guaranteed Epic/Legendary gear, medallions, bunkers",
    oddsNote: "Boss POIs, weather bunkers and vault interiors",
  },
  {
    id: "cash",
    name: "Cash Register / Safe",
    shortName: "Safe/Register",
    badge: "Bars & Gold",
    rarity: "Special",
    color: "#14B8A6", // Teal
    bgGradient: "from-teal-500/10 to-cyan-600/5",
    borderColor: "border-teal-500/30",
    typicalLoot: "100-300 Gold Bars, keycards, utility",
    oddsNote: "Commercial buildings, gas stations, and shops",
  },
];
