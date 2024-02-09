document.addEventListener('DOMContentLoaded', function() {
    // New post button event listener
    const newPostButton = document.getElementById('newPostButton');
    newPostButton.addEventListener('click', function() {
        // Add your logic to handle creating a new post
        console.log('Create new post button clicked');
    });

    // Read more buttons event listener
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // Add your logic to handle reading more of a post
            console.log('Read more button clicked');
        });
    });
});
