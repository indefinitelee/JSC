// GLOBAL VARIABLES -------
//STEP 2
// Store an array of image paths in a variable
var images = ['https://unsplash.it/800/600?image=533', 'https://unsplash.it/800/600?image=534', 'https://unsplash.it/800/600?image=531', 'https://unsplash.it/800/600?image=528', 'https://unsplash.it/800/600?image=527', 'https://unsplash.it/800/600?image=526'];

// Set a variable for the current position(index) and give it an initial value of 0
var currentPosition = 0;

// Set an array for votes
var votes = [0, 0, 0, 0, 0, 0];

// EVENTS ---------
//STEP 3
// Listen for click events on the next and previous buttons
$('#next').on('click', function() {
    // Update the current position
    currentPosition += 1;

    //Update source
    
    //Make sure the previous button is enabled
    $('#prev').prop('disabled', false);

    // If the currentPosition is at the last image
    
        // Disable the next button

   // show votes
 	changeImage();

});
$('#prev').on('click', function() {
    // Update the current position
    currentPosition -= 1;

    //Update source
    

    // Make sure the next button is enabled
    $('#next').prop('disabled', false);

    // If the currentPosition is at the first item (the zero index), disable the previous button
  	changeImage(); 
    
});

var changeImage = function() {
  $('#currentImage').attr('src', images[currentPosition]);
  if (currentPosition === 0) {
        $('#prev').prop('disabled', true);
    }
	$('#votes').html("Likes: " + votes[currentPosition]);
};
//STEP 7
// Listen for a change event on the #your-vote select menu
$('#upvote').on('click', function() {
	votes[currentPosition] += 1; 
  	$('#votes').html("Likes: " + votes[currentPosition]);
});
$('#downvote').on('click', function() {
	votes[currentPosition] -= 1; 
  	$('#votes').html("Likes: " + votes[currentPosition]);
});