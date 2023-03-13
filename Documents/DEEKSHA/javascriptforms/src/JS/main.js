function fitn() 
{
    //CODE FOR AGE AND WEIGHT 
    let y = Number(document.getElementById('age').value);
    let z = Number(document.getElementById('weight').value);
    if ((y < 1 || y > 100) && (z <= 1000) || (y == "" || z == "")) {
        document.getElementById('form-errors').innerHTML = "Age is not proper as well as weight is improper";
    }
    if (y >= 5 && y <= 7) {
        if (z >= 15 && z <= 20) {
            document.getElementById('form-errors').innerHTML = "FIT";
        }
        else if (z < 15)
            document.getElementById('form-errors').innerHTML = "UNDERWEIGHT";
        else
            document.getElementById('form-errors').innerHTML = "OVERWEIGHT";
    }
    else if (y >= 8 && y <= 10) {
        if (z >= 21 && z <= 25) {
            document.getElementById('form-errors').innerHTML = "FIT";
        }
        else if (z < 21)
            document.getElementById('form-errors').innerHTML = "UNDERWEIGHT";
        else
            document.getElementById('form-errors').innerHTML = "OVERWEIGHT";
    }
    else if (y >= 11 && y <= 15) {
        if (z >= 26 && z <= 30) {
            document.getElementById('form-errors').innerHTML = "FIT";
        }
        else if (z < 26)
            document.getElementById('form-errors').innerHTML = "UNDERWEIGHT";
        else
            document.getElementById('form-errors').innerHTML = "OVERWEIGHT";
    }
    else if (y >= 16 && y <= 20) {
        if (z >= 31 && z <= 40) {
            document.getElementById('form-errors').innerHTML = "FIT";
        }
        else if (z < 31)
            document.getElementById('form-errors').innerHTML = "UNDERWEIGHT";
        else
            document.getElementById('form-errors').innerHTML = "OVERWEIGHT";
    }
    else
    document.getElementById('form-errors').innerHTML = "NOT IN RANGE";

}




