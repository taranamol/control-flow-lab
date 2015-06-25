
prompt("how many verses do you want?")


for(i=5;i>0;i--){ 
if(i>1){
   console.log(i + " bottles of beer on the wall," + i + " bottles of beer!" + i + " Take one down and pass it around,"+ (i-1) + " bottles of beer on the wall!")
}else if(i<=1){
   console.log(i + " bottle of beer on the wall," + i + " bottle of beer!" + i + " Take one down and pass it around," + " No more bottles of beer on the wall!");
}
}