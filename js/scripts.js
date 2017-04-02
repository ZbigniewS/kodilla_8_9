// plik scripts.js
var n = prompt('Za chwilę narysuję choinkę, podaj ilość gałązek przedział 5 - 20 i sprawdź w konsoli jaka jest choinka')

rysujChoinke(n);
function rysujChoinke(n) {
    if ((n < 21) && (n > 0)) {
        for (var k = 1; k < n; k++) {
            var star = '|'
            for (var j = k; j < k * 2 - 1; j++) {
                star += '*!';
            }
            console.log(star);
        }
    } else {
        alert('Wartość poza wyznaczoną dla programu');
    }
}
