var answerSection = $('#answerSection');
answerSection.hide();

$('input').keyup(function() {
    var imaginary = false;
    var a = $('#a').val();
    var b = $('#b').val();
    var c = $('#c').val();

    squareRootContents = (b * b) - (4 * a * c);

    if (squareRootContents >= 0) {
        imaginary = false;
        var squareRoot = Math.sqrt(squareRootContents);
        var valueOne = ((-b) + squareRoot) / (2 * a);
        var valueTwo = ((-b) - squareRoot) / (2 * a);
    } else {
        imaginary = true;
        //there are going to be imaginary roots

        //factor out the -i
        var imaginarySquareRootContents = squareRootContents * -1
        var squareRoot = Math.sqrt(imaginarySquareRootContents);
        var partOneString = -b / (2 * a);

        //if the square root will leave a bunch of decimal places, we want to format it under a radical...
        if (squareRoot % 1 !== 0) {
            var partTwoString = "i" + "\u221A" + imaginarySquareRootContents + "/" + (2 * a);
        } else {
            var partTwoString = (squareRoot / (2 * a))+"i";
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