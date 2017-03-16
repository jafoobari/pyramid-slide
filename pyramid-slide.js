
// don't think we need this var heightElem = document.querySelector("#height");

var brickElem = document.querySelector("#pyramid-bricks");

//TODO
//use "onchange" to make it say when the character selector dropdown
//changes the pyramid bricks when it changes
//currently the bricks will update when the slider changes see TODO 2

function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    //display the height of the slider next to it

    displayHeight(height)

    //TODO 2
    //grab the character the user has selected
    brickStr = String(brickElem.value)

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brickStr;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.querySelector("#pyramid").appendChild(rowElem);
    }
}

function displayHeight(height){
    heightStr = String(height)
    document.querySelector("#height-string").innerHTML = heightStr
}

function getHeight(selectObject) {
    return value = document.querySelector("#height").value;
}
