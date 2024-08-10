function calculate() {

    const radius = parseFloat(document.getElementById("radius").value);

    const pi = 3.14;

    const area = pi * Math.pow(radius, 2);

    const circumference = 2 * pi * radius;


    document.getElementById('area').value = area.toFixed(2);
    document.getElementById('circumference').value = circumference.toFixed(2);







}