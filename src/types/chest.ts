export type ChestType = 
  | 'regular' 
  | 'rare' 
  | 'sprite' 
  | 'pirate' 
  | 'faction' 
  | 'cash';

export interface ChestTypeInfo {
  id: ChestType;
  name: string;
  shortName: string;
  badge: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Mythic' | 'Special';
  color: string;
  bgGradient: string;
  borderColor: string;
  typicalLoot: string;
  oddsNote: string;
}

export interface ChestActionLog {
  id: string;
  type: ChestType;
  delta: number;
  timestamp: number;
}

export interface ChestTrackerState {
  counts: Record<ChestType, number>;
  sessionTotal: number;
  todayTotal: number;
  allTimeTotal: number;
  dailyBest: number;
  lastActiveDate: string; // YYYY-MM-DD
  history: ChestActionLog[];
}

export interface ExportDataPayload {
  version: number;
  exportedAt: string;
  state: ChestTrackerState;
}
