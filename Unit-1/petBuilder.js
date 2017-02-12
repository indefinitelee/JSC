/* @function something
 * @param something2
 * @return something3
 *
 * My function does this
 * and @todo make it do x
 */
/* Starting State
 * Assume user is registered
 * @var loggedIn is true
 */

loggedIn = true;
/*
 * declare variables for each attribute
 */
let name = "";
// user inputs string from form
let ears = "fold";
// user selects from dropdown menu
let tail = True;
// user clicks radio button
let eyes = ["blue", "gray"];
//etc.

/*
 *  @class Pet accepts the parameters selected on form
 *  @param name String
 *  @param ears Boolean
 *  @param heads Integer
 */
class Pet {
  constructor(name, ears, tail, eyes, furStyle, color, wings, heads) {
    this.name = name;
    this.ears = ears;
    this.tail = tail;
    this.eyes = eyes;
    this.furStyle = furStyle;
    this.color = color;
    this.wings = wings;
    this.heads = heads;
  }
}
// except for name, each string would refer to a jpeg of that particular feature

/*
 * get this on the DOM somehow
 */
// document.querySelector
// // submit button is clicked
// function buildPet = new Pet ("Fluffy", "none", True, ["blue", "gray"], "leopard", "green", True, 3) {
// // add all images to the DOM something like
// // hardcoding the number of elements is not great
//  for (i; i < 7; i++) {
//   document.createElement(div)
// // loop through all elements of a Pet and append images to DOM
//  }
// }

