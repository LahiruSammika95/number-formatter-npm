Number formatter

To run this package on your application 

step 1 :install the package

npm install number-formatter-npm


step 2 :import the package

const formatter=require('number-formatter-npm')


step 3 :use functionalities

Here in this package you can convert any number into formatted strings 


example 01

To format numbers in 100,060,129 order 

formatter.numberFormatter({number:<input number>,round:<number of decimal places>,format:'standard'})

formatter.numberFormatter({number:554644.886,round:2,format:'standard'})  
output=> 554,644.89

formatter.numberFormatter({number:554644,round:2,format:'standard'})  
output=> 554,644

formatter.numberFormatter({number:554644.8486,round:3,format:'standard'})
output=> 554,644.849


example 02

To format numbers in 100k,100M,100B order 

formatter.numberFormatter({number:<input number>,round:<number of decimal places>,format:'default'})

formatter.numberFormatter({number:554644.886,round:2,format:'default'})  
output=> 554.64k

formatter.numberFormatter({number:554644,round:2,format:'default'}) 
output=> 554.64k

formatter.numberFormatter({number:554644,round:4,format:'default'}) 
output=> 554.6440k


example 03

To format numbers in currency order such as 100.00

formatter.numberFormatter({number:<input number>,format:'currency'})

formatter.numberFormatter({number:5546.886,format:'currency'})  
output=> 5,546.89