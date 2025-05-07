document.addEventListener('DOMContentLoaded', () => {
    const allowBtn = document.querySelector('.component');
    const manualBtn = document.querySelector('.div-wrapper');
  
    function applyMicroAnimations(button) {
      // Add transitions via JS
      button.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
  
      // Hover animation
      button.addEventListener('mouseenter', () => {
        button.style.transform = "scale(1.03)";
        button.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        button.style.cursor = "pointer";
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "none";
      });
  
      // Click animation
      button.addEventListener('mousedown', () => {
        button.style.transform = "scale(0.97)";
      });
  
      button.addEventListener('mouseup', () => {
        button.style.transform = "scale(1.03)";
      });
    }
  
    function navigateToNextPage() {
      window.location.href = "emergency1.html";
    }
  
    if (allowBtn) {
      applyMicroAnimations(allowBtn);
      allowBtn.addEventListener('click', navigateToNextPage);
    }
  
    if (manualBtn) {
      applyMicroAnimations(manualBtn);
      manualBtn.addEventListener('click', navigateToNextPage);
    }
  });
  

  
  document.addEventListener("DOMContentLoaded", () => {
    const ambulanceButton = document.querySelector('.group-4');

    if (ambulanceButton) {
        ambulanceButton.addEventListener('click', () => {
            window.location.href = 'ambulance map.html'; // Make sure this file exists
        });
    }
});



// Custom function: Animate an element with a class toggle
function animateElement(element, animationClass, duration = 500) {
  element.classList.add(animationClass);
  setTimeout(() => {
      element.classList.remove(animationClass);
  }, duration);
}

// DOM Traversal methods
const callButton = document.querySelector('.call-button'); // querySelector
const messageButton = document.getElementsByClassName('message-button')[0]; // getElementsByClassName
const navBar = document.querySelector('.NAVBAR');

// Micro-animation: Button pulse on mouseover/mouseout
callButton.addEventListener('mouseover', function () {
  animateElement(callButton, 'pulse');
});
callButton.addEventListener('mouseout', function () {
  callButton.classList.remove('pulse');
});
messageButton.addEventListener('mouseover', function () {
  animateElement(messageButton, 'pulse');
});
messageButton.addEventListener('mouseout', function () {
  messageButton.classList.remove('pulse');
});

// Mouse-based event: Click on 'CALL' button shows a notification
callButton.addEventListener('click', function () {
  showNotification('Calling the ambulance...');
});

// Mouse-based event: Click on 'MESSAGE' button shows a notification
messageButton.addEventListener('click', function () {
  showNotification('Sending a message to the ambulance...');
});

// Key-based event: Press 'E' key to highlight Emergency section
document.addEventListener('keydown', function (event) {
  if (event.key === 'e' || event.key === 'E') {
      const emergencyTitle = document.querySelector('.text-wrapper-2');
      animateElement(emergencyTitle, 'highlight');
  }
});

// DOM tree navigation property: Get first child of the NAVBAR and animate it
const firstNavIcon = navBar.firstElementChild;
firstNavIcon.addEventListener('click', function () {
  animateElement(firstNavIcon, 'nav-bounce');
});

// Dynamically add an element to the DOM: Show notification at runtime
function showNotification(message) {
  // Remove existing notification if present
  const existing = document.getElementById('custom-notification');
  if (existing) existing.remove();

  const notif = document.createElement('div');
  notif.id = 'custom-notification';
  notif.innerText = message;
  notif.setAttribute('tabindex', '0');
  notif.className = 'notification-popup';
  // Insert at the top of .ambulance-map
  document.querySelector('.ambulance-map').prepend(notif);

  // Auto-remove after 2 seconds
  setTimeout(() => {
      notif.remove();
  }, 2000);
}

// Add micro-animation classes via JS (no CSS file changes)
const style = document.createElement('style');
style.innerHTML = `






























.pulse {
  animation: pulse 0.4s;
}
@keyframes pulse {
  0% { transform: scale(1);}
  50% { transform: scale(1.08);}
  100% { transform: scale(1);}
}
.highlight {
  animation: highlight-bg 0.7s;
  background:rgb(80, 28, 28) !important;
}
@keyframes highlight-bg {
  0% { background: #fff;}
  50% { background:rgb(111, 47, 47);}
  100% { background: #fff;}
}
.notification-popup {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff5f5;
  color: #d32f2f;
  padding: 14px 28px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  font-size: 1.1em;
  z-index: 9999;
  font-family: inherit;
  outline: none;
}
.nav-bounce {
  animation: nav-bounce 0.5s;
}
@keyframes nav-bounce {
  0% { transform: translateY(0);}
  30% { transform: translateY(-8px);}
  60% { transform: translateY(4px);}
  100% { transform: translateY(0);}
}
`;
document.head.appendChild(style);
