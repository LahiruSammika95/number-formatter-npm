const symbols = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },

  ];
  
  const numberFormatter=({number,round,format})=> {
    if(round && format && format==='standard') return(Number(number.toFixed(round)).toLocaleString());

    if(format && format==='currency') {
    let num=Number(number).toLocaleString('en-US', {style:'currency', currency:'USD'});
    //this method also correct x =x.replace(/^[a-zA-Z\D]*/g, "");
    //this is also correct let pattern=/[\d.,]/g;
    let pattern=/[\d.,]+/;
    num=num.match(pattern)
    return num.join("");
  }
  if(round && format && format==='default'){
    const numToCheck = Math.abs(number);
    for (let i = symbols.length - 1; i >= 0; i--) {
      if (numToCheck >= symbols[i].value) {
        const newNumber = (number / symbols[i].value).toFixed(round);
        return `${newNumber}${symbols[i].symbol}`;
      }
    }
    return '0';
}
if(!round){
    return 'round value required for default and standard formats'
}
  }
 

  module.exports = numberFormatter;