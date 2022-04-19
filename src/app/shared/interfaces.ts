export interface AuthUser{
  email: string;
  password: string;
  returnSecureToken?: boolean
}

//user
export interface User {
  login: string;
  nickname: string;
  password: string;
  cars: Car[];
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

export interface fbCreateResponse{
  name: string
}

export interface  FbAuthResponse{
  idToken: string,
  expiresIn: string
}
