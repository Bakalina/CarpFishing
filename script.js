var x = 6;
var y = 15;
var z = 4;

document.write(x += y - x++ * z);
document.write("<hr/>");
document.write(z = --x - y * 5);
document.write("<hr/>");
document.write(y /= x + 5 % z);
document.write("<hr/>");
document.write(z = x++ + y * 5);
document.write("<hr/>");
document.write(x = y - x++ * z);
document.write("<hr/>");
