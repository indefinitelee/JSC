var Contact = function(firstName, lastName, phone, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
  this.displayContact = function() {
	console.log(this.firstName + ' ' + this.lastName);
	};
};

var johnDoe = new Contact("John", "Doe", "(512) 355-0453", "johndoe@email.com");
var janeDoe = new Contact('Jane', 'Doe', '(312) 641-2203', 'janedoe@email.com');
var suzieSmith = new Contact('Suzie', 'Smith', '(415) 604-4219', 'suziesmith@email.com');

var contacts = []; 
contacts.push(johnDoe, janeDoe, suzieSmith); 

// step 4 so do i have to write the entire constructor function again to add the display contact method or manually add the below in instead of appending with Contact.displayContact = function() etc.?
//Contact.displayContact = function() {
//	console.log(this.firstName + " " + this.lastName);
//};
// johnDoe.displayContact();

// step 5 Now let's rewrite our listContacts function so that it uses the displayContact method. ** there has not been a listContacts function yet**

var listContacts = function(){
  for (var i = 0; i < contacts.length; i++) {
// ahh need to call displayContact with ()
    contacts[i].displayContact(); 
  }
};
listContacts();

// does the param newContact refer to anything here?
var addContact = function(newContact) {
    contacts.push(newContact);
};

var mattKlaus = new Contact('Matt', 'Klaus', '(555) 234-0453', 'mattklaus@email.com');

addContact(mattKlaus);
listContacts();