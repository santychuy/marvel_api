export interface ReduceColabs {
  modified: string;
  items: [
    {
      resourceURI: string;
      name: string;
      role: string;
    }
  ];
}

export interface ReduceCharacters {
  modified: string;
  title: string;
  characters: {
    available: number;
    items: [{ resourceURI: string; name: string }];
  };
}

export interface Characters {
  character: string;
  comics: string[];
}

export interface ValidationCharacterId {
  characterId: string | null;
  valid: boolean;
}
