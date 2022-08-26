// document.write(1*1);
document.write("<table cellpadding=3>")
var i, sum = 0;
for (i = 1; i <= 10; i++) {
    sum = i + sum;
}
for(i=1; i<=10; i++) {
    document.write("<tr>")
    for(j=1; j<=10; j++) {
        document.write("<td>" + i + " " + j + "</td>");
    }
    document.write("</tr>")
}
document.write("</table>")
