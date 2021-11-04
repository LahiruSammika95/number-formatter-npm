<b>Number formatter</b><br><br>
To run this package on your application

step 1 :install the package

<b>npm install number-formatter-npm</b>

step 2 :import the package

<b>const formatter=require('number-formatter-npm')</b>

step 3 :use functionalities

Here in this package you can convert any number into formatted strings

<b>Use case 01</b>

To format numbers in 100,060,129 order

<b>formatter.numberFormatter({number:<input number>, round:<number of decimal places>, format:'standard'})</b>

formatter.numberFormatter({number:554644.886, round:2, format:'standard'})  
output=> 554,644.89

formatter.numberFormatter({number:554644, round:2, format:'standard'})  
output=> 554,644

formatter.numberFormatter({number:554644.8486, round:3, format:'standard'})
output=> 554,644.849

<b>use case 02</b>

To format numbers in 100k,100M,100B order

<b>formatter.numberFormatter({number:<input number>, round:<number of decimal places>, format:'default'})</b>

formatter.numberFormatter({number:554644.886, round:2, format:'default'})  
output=> 554.64k

formatter.numberFormatter({number:554644, round:2, format:'default'})
output=> 554.64k

formatter.numberFormatter({number:554644, round:4, format:'default'})
output=> 554.6440k

<b>use case 03</b>

To format numbers in currency order such as 100.00

<b>formatter.numberFormatter({number:<input number>, format:'currency'})</b>

formatter.numberFormatter({number:5546.886, format:'currency'})  
output=> 5,546.89

Github :https://github.com/LahiruSammika95/number-formatter-npm
