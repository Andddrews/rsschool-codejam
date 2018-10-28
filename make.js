function sum (){
for (var i = 1; i<arguments.length; i++ ){
var c = +arguments[0];
c = c + arguments[i];
}
return c;
}
