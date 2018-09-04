console.log('Utils.js is running');

export const add = (a, b) => {
    console.log('result is ', (a+b));
}

const square = (a) => {
    console.log('result of the squaring is ', a*a);
}

export default (a, b) => console.log('result of substract fn is ', a-b);

export {square}
