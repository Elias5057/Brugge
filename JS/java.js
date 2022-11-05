let tf = 0
//  tf = true false

function navigatie()
{
    //als navigatiebalk verborgen is dan wordt het menu getoond
    if (tf == 0) 
    {
        document.getElementById("smartnav").style.display = "block";
        document.getElementById("wrapper").style.position = "fixed"
        tf = 1;
    }
    //als menu reeds zichtbaar is dan wordt het menu verborgen
    else if (tf = 1)
    {
        document.getElementById("smartnav").style.display = "none";
        document.getElementById("wrapper").style.position = "relative"
        tf = 0;
    }
}



