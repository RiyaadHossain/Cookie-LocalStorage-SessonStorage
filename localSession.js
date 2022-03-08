/* +++++++++++++++++++++ Module 39; video- 6 +++++++++++++++++++++ */

// Local Storage: Saved the data until it is changed
// Session Storage: Data will clear whenever close the tab

const item = localStorage.getItem("itemName"); // get item from local / session storage
localStorage.setItem("itemName", "value"); // set name-value in the storage

const parseValue = JSON.parse(item); // parse the data
// after getting the data parse it to add or modify any element

item.name = "something";

const stringValue = JSON.stringify(parseValue); // stringify the data

// then set it into the storage
localStorage.setItem("keyName", stringValue);
