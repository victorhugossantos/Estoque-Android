import { Produto } from "./Produto";

let prod1: Produto = new Produto(1,'Teclado', 50);
let prod1Str: string = JSON.stringify(prod1);
let prod2: Produto = JSON.parse(prod1Str);
