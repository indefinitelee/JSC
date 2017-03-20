// This line finds the h1 and changes the html to read "Watch out DOM - Here we come!" 
document.getElementsByTagName('h1')[0].innerHTML = "Watch out DOM - Here we come!";
// Step 2: Using the above line as reference, update the html of the h2 element to read "JavaScript Ninja!";
document.getElementsByTagName('h2')[0].innerHTML = "JavaScript Ninja!";
// Step 3: The following code changes the background color of the body to blue. 
// Update this code. We want the background color to be "#048a97" instead of "#dadada". 
document.getElementsByTagName('body')[0].style.backgroundColor = "#048a97";

// Step 4: The following code adds the class "boring" to the first paragraph element on the page. 
// In our CSS we have added styles to the class .boring that make the color grey. 
// Update this code. We want to add the class "fun" instead of "boring". 
// Take a look in the CSS tab to see the styles that will be added to the paragraph. 
document.getElementsByTagName('p')[0].className = "fun";