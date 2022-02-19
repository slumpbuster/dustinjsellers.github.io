function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL
   
    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
dynamicallyLoadScript('https://formspree.io/js/formbutton-v1.min.js');

(function() {
  "use strict"; // Start of use strict

  var menuToggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('#sidebar-wrapper');
  
  if (menuToggle) {
    // Closes the sidebar menu
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();

      sidebar.classList.toggle('active');
      menuToggle.classList.toggle('active');
      
      var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
      if (icon) {
        if (icon.classList.contains('fa-times')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      }

    });
  }

  var navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarCollapse) {
    var navbarItems = navbarCollapse.querySelectorAll('a');

    // Closes responsive menu when a scroll trigger link is clicked
    for (var item of navbarItems) {
      item.addEventListener('click', function (event) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
        
        var icon = menuToggle.querySelector('.fa-bars, .fa-times');
      
        if (icon) {
          if (icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          } else if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          }
        }
      });
    }
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }
})(); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(e) {
  this.addEventListener('click', onMapClickHandler);
  this.removeEventListener('mouseleave', onMapMouseleaveHandler);

  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'none';
  }
}

var onMapClickHandler = function(e) {
  // Disable the click handler until the user leaves the map area
  this.removeEventListener('click', onMapClickHandler);
  // Handle the mouse leave event
  this.addEventListener('mouseleave', onMapMouseleaveHandler);

  // Enable scrolling zoom
  var iframe = this.querySelector('iframe'); 
  
  if (iframe) {
    iframe.style.pointerEvents = 'auto';
  }
}

var maps = document.querySelectorAll('.map');

for (var map of maps) {
  // Enable map zooming with mouse scroll when the user clicks the map
  map.addEventListener('click', onMapClickHandler);
}

var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/     
formbutton("create", {
action: "https://formspree.io/f/mqknqybr",
title: "How can we help?",
fields: [
  { 
    type: "email", 
    label: "Email:", 
    name: "email",
    required: true,
    placeholder: "your@email.com"
  },
  {
    type: "textarea",
    label: "Message:",
    name: "message",
    placeholder: "What's on your mind?",
  },
  { type: "submit" }      
],
styles: {
  title: {
    backgroundColor: "gray"
  },
  button: {
    backgroundColor: "gray"
  }
}
});