import { Interface } from "readline";

let data;

data = "43";

data = 3;

export interface ICar {
    color: string;
    model: string;
    topSpeed?: number;
}
const car1: ICar = {
    color: 'blue',
    model: 'Bmw'
}

const car2: ICar = {
    color: 'red',
    model: 'Mercedes',
    topSpeed: 100 
}

const multiply = (x: number, y: number) => {
    x*y;
}

export const cars = [car1, car2];
//export const ICar= [car1, car2];