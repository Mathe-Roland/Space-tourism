let menu1 = document.querySelectorAll(".menu1");
let menu2 = document.querySelectorAll(".menu2");
let menu3 = document.querySelectorAll(".menu3");
let homediv = document.querySelector(".home");
let homeButton = document.querySelector(".homeb");
let destinationdiv = document.querySelector(".destination");
let destinationb = document.querySelector(".destinationb");
let crewb = document.querySelector(".crewb");
let technologyb = document.querySelector(".technologyb");
let toateDiv = document.querySelectorAll(".toate");
let innerDiv = document.querySelector(".innerdiv");
let marsb = document.querySelector(".marsb");
let europab = document.querySelector(".europab");
let img = document.querySelector(".new-img");
let moonb = document.querySelector(".moonb");
let titanb = document.querySelector(".titanb");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let background = document.querySelector(".background");

let text3 = document.querySelector(".text3");
let text4 = document.querySelector(".text4");
let commander = document.querySelector(".commander");
let name1 = document.querySelector(".name");
let description = document.querySelector(".description");
let crew = document.querySelector(".crew");
let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelector(".icon2");
let icon3 = document.querySelector(".icon3");
let icon4 = document.querySelector(".icon4");
let icons = document.querySelectorAll(".icons");
let crewPicture = document.querySelector(".crew-picture");

let technology1 = document.querySelector(".technology1");
let technology2 = document.querySelector(".technology2");
let technology3 = document.querySelector(".technology3");
let technologyDiv = document.querySelector(".Technology");
let launchimage = document.querySelector(".launchr");
let launchtext = document.querySelector(".launchv");
let launchtext2 = document.querySelector(".launchtext");



menu1.forEach((element) => {
  element.addEventListener("click", function () {
    menu1.forEach((element) => {
      element.style.borderBottom = "none";
    });
    element.style.borderBottom = "2px solid white";
  });
});

menu2.forEach((element) => {
  element.addEventListener("click", function () {
    menu2.forEach((element) => {
      element.style.borderBottom = "none";
    });
    element.style.borderBottom = "2px solid white";

  });
});

menu3.forEach((element) => {
  element.addEventListener("click", function () {
    menu3.forEach((element) => {
      element.style.backgroundColor = "blanchedalmond";
    });
    element.style.backgroundColor = "green";

  });
});


destinationb.addEventListener("click", function () {
  background.style.backgroundImage = "url('./images/destinationBackground.jpg')";
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  destinationdiv.classList.remove("hidden1");
});

homeButton.addEventListener("click", function () {
  background.style.backgroundImage = "url('./images/homeBackground.jpg')";
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  homediv.classList.remove("hidden1");
});

marsb.addEventListener("click", function () {
  text1.textContent = "MARS";
  text2.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  text3.textContent = "225 MIL. km";
  text4.textContent = "9 months";
  img.src = "./images/mars.png";

});


europab.addEventListener("click", function () {
  text1.textContent = "EUROPA";
  text2.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  text3.textContent = "628 MIL. km";
  text4.textContent = "3 years";
  img.src = "./images/europa.png";
});


moonb.addEventListener("click", function () {
  text1.textContent = "MOON";
  text2.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ";
  text3.textContent = "384,400 km";
  text4.textContent = "3 days";
  img.src = "./images/moon.png";
});

titanb.addEventListener("click", function () {


  text1.textContent = "TITAN";
  text2.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  text3.textContent = "1.6 BIL. km";
  text4.textContent = "7 years";
  img.src = "./images/titan.png";
})


crewb.addEventListener("click", function () {
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  crew.classList.remove("hidden1");
  background.style.backgroundImage = "url('./images/crewBackground.jpg')";

})


icon1.addEventListener("click", function () {

  commander.textContent = "Commander";

  icons.forEach((element) => {
    element.classList.remove("backgroundCw");
    element.classList.remove(".border-radius");
  })
  icon1.classList.add("backgroundCw");
  icon1.classList.add("border-radius");
  crewPicture.src = "./images/firstPictureCrew.png";
  description.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  name1.textContent = "Douglas Hurley";

});




icon2.addEventListener("click", function () {

  commander.textContent = "Mission Specialist ";

  icons.forEach((element) => {
    element.classList.remove("backgroundCw");
    element.classList.remove(".border-radius");
  })
  icon2.classList.add("backgroundCw");
  icon2.classList.add("border-radius");
  crewPicture.src = "./images/secondPictureCrew.png";
  description.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  name1.textContent = "MARK SHUTTLEWORTH";

});


icon3.addEventListener("click", function () {

  commander.textContent = "PILOT";

  icons.forEach((element) => {
    element.classList.remove("backgroundCw");
    element.classList.remove(".border-radius");
  })
  icon3.classList.add("backgroundCw");
  icon3.classList.add("border-radius");
  crewPicture.src = "./images/thirdPictureCrew.png";
  description.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
  name1.textContent = "Victor Glover";
});


icon4.addEventListener("click", function () {

  commander.textContent = "Flight Engineer ";

  icons.forEach((element) => {
    element.classList.remove("backgroundCw");
    element.classList.remove(".border-radius");
  })
  icon4.classList.add("backgroundCw");
  icon4.classList.add("border-radius");
  crewPicture.src = "./images/lastpictureCrew.png";
  description.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
  name1.textContent = "Anousheh Ansari";

});



technologyb.addEventListener("click", function () {
  
    toateDiv.forEach((element) => {
      element.classList.add("hidden1");
    })
    technologyDiv.classList.remove("hidden1");
    background.style.backgroundImage = "url('./images/terchnologyBackground.jpg')";
  
  });

technology1.addEventListener("click", function () {

 
  launchimage.src="./images/Rocket.jpg";
  launchtext.textContent="LAUNCH VEHICLE";
  launchtext2.textContent="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

});

technology2.addEventListener("click", function () {

 
  launchimage.src="./images/SpacePortSecond.jpg";
  launchtext.textContent="SPACEPORT";
  launchtext2.textContent="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

});

technology3.addEventListener("click", function () {

 
  launchimage.src="./images/space-shuttle.jpg";
  launchtext.textContent="SPACE CAPSULE";
  launchtext2.textContent="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

});


let smenub=document.querySelector(".smenu");
let whiteBlock=document.querySelector(".white-block")

smenub.addEventListener("click",function(){
  whiteBlock.classList.toggle("hidden1");
})

whiteBlock.addEventListener("mouseleave",function (){
  whiteBlock.classList.add("hidden1")
})


let homeb2=document.querySelector(".homeb2");
let destinationb2=document.querySelector(".destinationb2");
let crewb2=document.querySelector(".crewb2");
let technologyb2=document.querySelector(".technologyb2");


homeb2.addEventListener("click",function (){
  background.style.backgroundImage = "url('./images/homeBackground.jpg')";
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  homediv.classList.remove("hidden1");
});
destinationb2.addEventListener("click",function(){
  background.style.backgroundImage = "url('./images/destinationBackground.jpg')";
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  destinationdiv.classList.remove("hidden1");
});

crewb2.addEventListener("click",function (){
  toateDiv.forEach((element) => {
    element.classList.add("hidden1");
  })
  crew.classList.remove("hidden1");
  background.style.backgroundImage = "url('./images/crewBackground.jpg')";

})

technologyb2.addEventListener("click",function(){
toateDiv.forEach((element) => {
      element.classList.add("hidden1");
    })
    technologyDiv.classList.remove("hidden1");
    background.style.backgroundImage = "url('./images/terchnologyBackground.jpg')";
  
  });