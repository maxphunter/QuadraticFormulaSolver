var answerSection = $('#answerSection');
answerSection.hide();

$('input').keyup(function() {
    var imaginary = false;
    var a = $('#a').val();
    var b = $('#b').val();
    var c = $('#c').val();

    var squareRootContents = (b * b) - (4 * a * c);
    var squareRoot;
    var valueOne;
    var valueTwo;
    var partOneString;
    var partTwoString;
    var imaginarySquareRootContents;

    if (squareRootContents >= 0) {
        imaginary = false;
        squareRoot = Math.sqrt(squareRootContents);
        valueOne = ((-b) + squareRoot) / (2 * a);
        valueTwo = ((-b) - squareRoot) / (2 * a);
    } else {
        imaginary = true;
        //there are going to be imaginary roots

        //factor out the -i
        imaginarySquareRootContents = squareRootContents * -1;
        squareRoot = Math.sqrt(imaginarySquareRootContents);
        partOneString = -b / (2 * a);

        //if the square root will leave a bunch of decimal places, we want to format it under a radical...
        if (squareRoot % 1 !== 0) {
            partTwoString = "i" + "\u221A" + imaginarySquareRootContents + "/" + (2 * a);
        } else {
            partTwoString = (squareRoot / (2 * a))+"i";
        }

    }

    if (imaginary) {

        $('#x').text('X = ' + partOneString + " \xB1 " + partTwoString);

    } else {
        answerSection.show();
        if (valueOne == valueTwo) {
            $('#x').text('X = ' + valueOne);
        } else {
            $('#x').text('X = ' + valueOne + ' and ' + valueTwo);
        }

    }
});