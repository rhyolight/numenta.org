set terminal png transparent size 640,240
set size 1.0,1.0

set terminal png transparent size 640,480
set output 'lines_of_code_by_author.png'
set key left top
set yrange [0:]
set xdata time
set timefmt "%s"
set format x "%Y-%m-%d"
set grid y
set ylabel "Lines"
set xtics rotate
set bmargin 6
plot 'lines_of_code_by_author.dat' using 1:2 title "Matthew Taylor" w lines, 'lines_of_code_by_author.dat' using 1:3 title "Marek Otahal" w lines, 'lines_of_code_by_author.dat' using 1:4 title "Chetan Surpur" w lines, 'lines_of_code_by_author.dat' using 1:5 title "Scott Purdy" w lines, 'lines_of_code_by_author.dat' using 1:6 title "Austin Marshall" w lines, 'lines_of_code_by_author.dat' using 1:7 title "gshotan" w lines, 'lines_of_code_by_author.dat' using 1:8 title "Subutai Ahmad" w lines, 'lines_of_code_by_author.dat' using 1:9 title "David Ragazzi" w lines, 'lines_of_code_by_author.dat' using 1:10 title "DavidRagazzi" w lines, 'lines_of_code_by_author.dat' using 1:11 title "Numenta CI" w lines, 'lines_of_code_by_author.dat' using 1:12 title "Ron Marianetti" w lines, 'lines_of_code_by_author.dat' using 1:13 title "Christopher L. Simons" w lines, 'lines_of_code_by_author.dat' using 1:14 title "Matt Keith" w lines, 'lines_of_code_by_author.dat' using 1:15 title "utensil" w lines, 'lines_of_code_by_author.dat' using 1:16 title "tester" w lines, 'lines_of_code_by_author.dat' using 1:17 title "Ryan McCall" w lines, 'lines_of_code_by_author.dat' using 1:18 title "Jim Bridgewater" w lines, 'lines_of_code_by_author.dat' using 1:19 title "Ian Danforth" w lines, 'lines_of_code_by_author.dat' using 1:20 title "Ellery" w lines, 'lines_of_code_by_author.dat' using 1:21 title "akamlani" w lines
