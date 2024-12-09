$(document).ready(function(){

  $('#hbtn').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#id').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

// Get the element containing the experience number
const experienceElement = document.getElementById('experience');

// Function to update the experience number
function updateExperienceNumber() {
  const experienceSpan = experienceElement.querySelector('span');
  let currentExperience = parseInt(experienceSpan.textContent, 10); // Convert text to number
  currentExperience++;
  experienceSpan.textContent = currentExperience + '+';
}

// Initial call to update the number
updateExperienceNumber();

// Schedule the update for the next year
function scheduleUpdate() {
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1, 0, 1); // Set to January 1st of the next year
  const timeUntilNextYear = nextYear - new Date();

  setTimeout(updateExperienceNumber, timeUntilNextYear);
}

scheduleUpdate();



const ageElement = document.getElementById('age');

  // Function to update the age
  function updateAge() {
    const currentAgeText = ageElement.textContent.trim();
    const currentAge = parseInt(currentAgeText.substring(6), 10); // Extract the age number
    const newAge = currentAge;
    ageElement.textContent = ` age : ${newAge}`;
  }

  // Initial call to update the age
  updateAge();

  // Schedule the update for the next year
  function scheduleUpdate() {
    const nextYear = new Date();
    nextYear.setFullYear(nextYear.getFullYear() + 1, 0, 1); // Set to January 1st of the next year
    const timeUntilNextYear = nextYear - new Date();

    setTimeout(updateAge, timeUntilNextYear);
  }

  scheduleUpdate();