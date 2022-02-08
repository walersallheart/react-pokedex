export type Pokemon = {
    id:string;
    name:string;
    type:string[];
    description?:string;
    species?:string;
    profile?:PokemonProfile;
    nextEvolution?:Evolution[];
    prevEvolution?:Evolution[];
    base?:PokemonStats;
};

export type PokemonProfile = {
    height:string;
    weight:string;
    egg: string[],
    ability:string[]
    gender:string;
}

export type Evolution = {
    pokemon:Pokemon;
    level:number;
}

export type PokemonStats = {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack:number;
    specialDefense:number;
}

/*
"id": "001",
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ],
  "profile": {
    "height": "0.7 m",
    "weight": "6.9 kg",
    "egg": [
      "Monster",
      "Grass"
    ],
    "ability": [
      [
        "Overgrow",
        "false"
      ],
      [
        "Chlorophyll",
        "true"
      ]
    ],
    "gender": "87.5:12.5"
  },
  "next_evolution": [
    {
      "num": "002",
      "name": "Ivysaur"
    },
    {
      "num": "003",
      "name": "Venusaur"
    }
  ],
  "prev_evolution": [],
  "base": {
    "HP": 45,
    "Attack": 49,
    "Defense": 49,
    "Speed": 45
  },
  "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.",
  "species": "Seed Pokémon"
*/