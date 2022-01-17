export interface spellType {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: DamageType;
  school: StandardType;
  classes: StandardType[];
  subclasses: StandardType[];
  url: string;
}

interface DamageType {
  damage_type: StandardType;
  damage_at_slot_level: {
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
  };
}

interface StandardType {
  name: string;
  index: string;
  url: string;
}
