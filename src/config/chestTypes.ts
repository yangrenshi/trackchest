export interface DetailedChestType {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Mythic" | "Special";
  color: string;
  whereItSpawns: string;
  howToIdentify: string;
  worthRerouting: string;
  commonMisconceptions: string;
  typicalLoot: string;
  officialContext: string;
}

export const DETAILED_CHEST_TYPES: DetailedChestType[] = [
  {
    id: "regular",
    name: "Standard Wooden Chest",
    shortName: "Standard",
    badge: "Base Spawn",
    rarity: "Common",
    color: "#EAB308",
    whereItSpawns: "Found in almost every building attic, basement, roof nook, and landmark across the Chapter 7 island. Hundreds of potential spawn points are mapped across named island locations and landmark houses.",
    howToIdentify: "Traditional brass-bound wooden crate emitting a warm yellow glow and an audible hum within 15 meters.",
    worthRerouting: "No. Standard chests should be looted strictly along your natural drop line. Deviating more than 10 meters off your rotation route for a standard chest slows down your POI clear speed.",
    commonMisconceptions: "Many players assume chest spawn points are 100% guaranteed; in Battle Royale, spawn node activation fluctuates dynamically each match according to island storm phase and POI density.",
    typicalLoot: "1 Weapon (Common to Rare), matching ammunition, 1 consumable heal (Small Shield Potions or Bandages), and building materials.",
    officialContext: "Standard container pool in Chapter 7 Treasure Hunters.",
  },
  {
    id: "rare",
    name: "Rare Blue Chest (Super Chest)",
    shortName: "Rare/Super",
    badge: "Blue Glow",
    rarity: "Rare",
    color: "#3B82F6",
    whereItSpawns: "Spawns randomly replacing standard chest nodes (low roll probability) or permanently in fortified POI control rooms, weather stations, and subterranean tunnels.",
    howToIdentify: "Sleek metallic blue exterior with a bright cyan luminescence and a higher-pitched, musical chime.",
    worthRerouting: "Yes. Guaranteed to yield Rare (Blue), Epic (Purple), or Legendary (Gold) weaponry alongside full shield consumables. Gaining an Epic AR or Shotgun off-spawn wins early contests.",
    commonMisconceptions: "Believing Rare Chests require special keys. They open with the same interaction speed as standard chests without consuming any resources.",
    typicalLoot: "Guaranteed Blue or higher tier weapon, Big Shield Potion or Chug Splashes, maximum ammunition bundle, and bonus gold bars.",
    officialContext: "High-tier container node upgrade in Chapter 7.",
  },
  {
    id: "sprite",
    name: "Sprite Shrine & Elemental Chest",
    shortName: "Sprite Shrine",
    badge: "Elemental Magic",
    rarity: "Epic",
    color: "#10B981",
    whereItSpawns: "Enchanted grottos, mythical tree groves, and elemental shrine altars located primarily in the southern and western biomes of Chapter 7.",
    howToIdentify: "Wrapped in ancient vine flora with green emerald embers floating upward from the lid. Hum has a wind-chime frequency.",
    worthRerouting: "Situational. Excellent for players who leverage elemental mobility or specialized utility shards to disengage during early storm contractions.",
    commonMisconceptions: "Thinking Sprite Shrines only give utility. They also drop competitive high-rarity combat gear alongside elemental powers.",
    typicalLoot: "Elemental movement powerups, enhanced combat utility items, Rare/Epic weapons, and healing consumables.",
    officialContext: "Biome-exclusive container variant in Chapter 7.",
  },
  {
    id: "pirate",
    name: "Pirate Crate & Buried Treasure",
    shortName: "Pirate/Crate",
    badge: "Guaranteed Loot",
    rarity: "Special",
    color: "#F97316",
    whereItSpawns: "Coastal docks, pirate encampments, and marked 'X' spots when following a legendary Buried Treasure map item in Chapter 7 Treasure Hunters.",
    howToIdentify: "Weathered oak barrel crate with skull emblems and iron straps. Emits deep golden maritime sparkles.",
    worthRerouting: "Pirate Shop Access Tokens roll from standard, rare, sprite and vault containers at 1 in 137,500 — the Pirate Crate itself guarantees high-tier loot but does not roll on the token table.",
    commonMisconceptions: "Thinking Pirate Crates roll for the token — normal containers in pirate POIs do, the crate itself is guaranteed loot.",
    typicalLoot: "Heavy pirate ordnance (Flint-Knock, Cannons), double Legendary weapon rolls, and full shield kegs.",
    officialContext: "Core seasonal feature of Chapter 7 Treasure Hunters (Nov 1 – Dec 4, 2026).",
  },
  {
    id: "faction",
    name: "Boss Vault & Bunker Cache",
    shortName: "Vault Bunker",
    badge: "Keycard Secured",
    rarity: "Mythic",
    color: "#A855F7",
    whereItSpawns: "Deep inside subterranean POI vaults, guarded by high-health NPC bosses and security turrets.",
    howToIdentify: "Massive reinforced steel vaults with twin airlock latches. Requires a Boss Keycard, terminal hack, or late-match bunker opening timer.",
    worthRerouting: "Primary squad objective. Opening a boss vault equips an entire trio or squad with top-tier tournament weapons, medallions, and workbench weapon mods.",
    commonMisconceptions: "Trying to pickaxe through vault doors. Vault exterior walls are completely indestructible until the security threshold is satisfied.",
    typicalLoot: "2 to 4 Epic/Legendary weapon cases, Boss Mythic weapons, multiple Big Shield Pots, and 300+ gold bars.",
    officialContext: "End-tier POI objective in competitive Chapter 7.",
  },
  {
    id: "cash",
    name: "Commercial Safe & Register",
    shortName: "Safe/Register",
    badge: "Economy Engine",
    rarity: "Special",
    color: "#14B8A6",
    whereItSpawns: "Gas station checkout counters, retail stores, banks, and diner back offices across named commercial settlements.",
    howToIdentify: "Small desktop cash register or heavy dark-grey floor safe with a mechanical dial wheel.",
    worthRerouting: "Great for Early-Game economy building. Safes take approximately 8 seconds to crack open, so ensure the immediate building is secured first.",
    commonMisconceptions: "Assuming safes drop weapons. Safes strictly dispense large sums of Gold Bars (100–300 bars) and healing items, not combat firearms.",
    typicalLoot: "100 to 300 Gold Bars, medkits or small shield potions, and occasional utility items for vending machine purchases.",
    officialContext: "Economic container pool in Chapter 7.",
  },
];

// 向下兼容基础 CHEST_TYPES 格式，支持首页与仪表盘网格
export const CHEST_TYPES = DETAILED_CHEST_TYPES.map((c) => ({
  id: c.id as import("@/types/chest").ChestType,
  name: c.name,
  shortName: c.shortName,
  badge: c.badge,
  rarity: c.rarity,
  color: c.color,
  bgGradient: "from-zinc-800 to-zinc-900",
  borderColor: "border-zinc-700",
  typicalLoot: c.typicalLoot,
  oddsNote: c.whereItSpawns,
}));

