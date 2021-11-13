let val = 1
let fact = 1
document.write("<pre>VALUE     FACTORIAL\n")
for (var count = 1; count <= 10; count++) {
    document.write(val + "       " + fact + "\n")
    fact = fact * ++val
}
document.write("</pre>")