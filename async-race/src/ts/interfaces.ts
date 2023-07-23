export interface Cars {
  name: string,
  color: string,
  id?: 1
}

export interface Car {
  wins: number,
  time: number,
  id?: number
}

export interface UpdatedCar {
  name: string | undefined,
  color: string | undefined,
}

export interface Winners {
  id: number,
  wins: number,
  time: number
}

export interface Winner {
  id: number;
  name: string;
}

export interface AddedCar {
  name?: string,
  color?: string,
}
