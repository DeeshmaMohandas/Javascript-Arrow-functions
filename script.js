let str=prompt("Enter string")
const transformstring=(str)=>
    str.split('').map((char, index) => `${index}${char.toUpperCase()}`).join('');
document.write(transformstring(str))