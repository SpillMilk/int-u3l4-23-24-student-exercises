// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
  myName.innerHTML = "Korben Schrader";
  myHobby.innerHTML = "Spending time with friends and family";
  myLocation.innerHTML = "Sunnyside, New York";






});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener('click', function(){
  image.src = "https://1.bp.blogspot.com/-o7_1DS_jKuc/XmRmJLiceKI/AAAAAAAAKZY/iQPZI3e0rbcnsr2C-0STajctP0kOy-F-QCLcBGAsYHQ/s1600/Platypus_2.jpg";
});





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener('click', function(){
  image.src = "https://www.ipswichfirst.com.au/wp-content/uploads/2019/08/shutterstock_1225026040.jpg";
});

// BONUS
// 7. Try using different event types for your buttons.
