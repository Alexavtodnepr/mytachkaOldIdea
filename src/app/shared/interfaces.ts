//user
export interface User {
  login: string;
  nickname: string;
  password: string;
  Cars: Car[];
  registered: boolean;
  admin: string;
  email: string;
}

//машина
export interface Car{
  model: string;
  brand: string;
  year: Date;
  techviews: Techviews[];
}

// техосмотр
export interface Techviews{
  date: Date;
  speedLim: string;
  parts: Part[];
  sto: Sto[];
}

// запчасти
export interface Part {
  article: string;
  quantity: number;
  price: number;
}

// сто
export interface Sto{
  adress: string;
  actions: Action[];
  recomend: Recomendation[];
}

// выполненные работы
export interface Action{
  name: string;
  price: number;
  quantity: number;
}

// рекомендации
export interface Recomendation{
  name: string;
  millage: number;
  abtPrice: number;
}
