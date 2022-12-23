export interface Show {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface ShowSearchApi {
  score: number;
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
    }
    summary: string;
  }
}

export interface ShowApi {
    id: number;
    name: string;
    image: {
      medium: string;
    }
    summary: string;
}