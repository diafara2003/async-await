const { taskOne,tasktwo} = require('./task');

//import { taskOne,tasktwo } from "./task";

async function main() {
    console.time('midiendo el tiempo');

    const valueOne = await taskOne();
    const valueTwo = await tasktwo();

    console.timeEnd("termino");
    
    console.log(`task one ${valueOne}`);
    console.log(`task two ${valueTwo}`);

}

async function mainParall() {
    console.time('midiendo el tiempo');


 const results=  await Promise.all([taskOne(),tasktwo()]);
  
    console.timeEnd("termino");
    
    console.log(`task one ${results[0]}`);
    console.log(`task two ${results[0]}`);

}

mainParall();