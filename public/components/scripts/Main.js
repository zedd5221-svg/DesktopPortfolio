// Initialize EmailJS when the page loads
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("gnhGO9W2FD9FGro6S"); // your public key
});

// Function to handle EmailJS form submission
function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const message = form.querySelector("#message").value;

    // send email
    emailjs.send("service_vevszde", "template_idrsz0a", {
        from_name: name,
        reply_to: email,
        message: message
    })
    .then(function(response) {
        alert("Message sent successfully!");
        form.reset();
    }, function(error) {
        console.error("EmailJS FAILED...", error);
        alert("Failed to send message.");
    });

    return false;
}

//----------------------------------------------------------------------------------------------------------------------------------







// this array defines the software applications available in the desktop environment
// each object contains the id, name, icon path, and HTML content for the application
// the content includes sections for About, Works, Contact, and Links
// this structure allows for easy addition or modification of software applications

var softwares = [
    {
        id: 'About',
        name: 'About.exe',
        icons: '/public/components/Images/icons/info.png',
        content: '<h2>About Me</h2> <p>Hello! I am Sarcon Tayuan Ulama a passionate developer and designer with a love for creating beautiful, functional experiences.</p><p>With years of experience in web development, I specialize in building modern applications that blend retro aesthetics with contemporary functionality.</p><p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js, UI/UX Design</p><p><strong>Interests:</strong> Retro computing, minimalist design, open source</p>'
    },
    {
        id: 'Works',
        name: 'Works.exe',
        icons: '/public/components/Images/icons/start-up.png',
        content: '<h2>My Works</h2><div class="project"><h3>POS System</h3><p>Simple POS System [Unfinished] <a href="/Works/POs/Index.html" target="_blank" rel="noopener noreferrer">POS SYSTEM</a></p></div>'
    },
    {
        id: 'Contact',
        name: 'Contact.exe',
        icons: '/public/components/Images/icons/pixels.png',
        content: `
                    <h2>Contact Me</h2>
                        <form class="contact-form">
                            <input type="text" id="name" placeholder="Your Name" required>
                            <input type="email" id="email" placeholder="Your Email" required>
                            <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                    </form>`
    },
    {
        id: 'Links',
        name: 'Links.exe',
        icons: '/public/components/Images/icons/link.png',
        content: '<h2>Links</h2><a href="https://github.com" target="_blank" class="link-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg><span>GitHub Profile</span></a><a href="https://linkedin.com" target="_blank" class="link-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg><span>LinkedIn Profile</span></a><a href="https://twitter.com" target="_blank" class="link-item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg><span>Twitter Profile</span></a>'
  
    }, 
    {
        id: 'Documents',
        name: 'Documents.exe',
        icons: '/public/components/Images/icons/document.png',
        content: `<h2>My Documents</h2>
                  <p>No documents available at the moment.</p>`
    }, 
    {
        id: 'Grade',
        name: 'Grades.exe',
        icons: '/public/components/Images/icons/test.png',
        content: `<h2>My Grades</h2>
                  <div class="project">
                        <h3>Long Quiz [Pre Lim]</h3>
                        <p><b>Score: </b> Unavailabke</p>
                  
                  </div>
                  <div class="project">
                        <h3>MidTerm</h3>
                        <p><b>Score: </b> Unavailabke</p>
                  
                  </div>
                  <div class="project">
                        <h3>Finals</h3>
                        <p><b>Score: </b> Unavailabke</p>
                  
                  </div>`
    },
    {
        id: 'Game',
        name: 'CodingAdventure.exe',
        icons: '/public/components/Images/icons/game-console.png',
        content: `<link rel="stylesheet" href="/public/components/styles/Game.css"> 
                  <div id="gameContainer">
                    <div class="gameInfo">
                        <span id="playerInfo">HP: 100/100 | Level: 1 | XP: 0/100</span>
                    </div>
                    <canvas id="gameCanvas" width="480" height="260"></canvas>
                  </div>
                  <script src="/public/components/scripts/Game.js"></script>
        
        ` 
    }                
];

// Global variables to manage window states and dragging functionality

var zIndexCounter = 1000; // Initialize z-index counter for window stacking
var draggedWindow = null; // Variable to track the currently dragged window
var offsetX = 0; // X offset for dragging
var offsetY = 0; // Y offset for dragging

//fucntion to update the time on the taskbar and lock screen
function updateTime() {
    var now = new Date();
    var timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    var dateStr = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    document.getElementById('taskbarTime').textContent = timeStr;
    document.getElementById('lockDate').textContent = dateStr;
    document.getElementById('lockTime').textContent = timeStr;
  
}


// Update time every minute
setInterval(updateTime, 1000);
updateTime();

//This function allows for unlocking the screen when clicked
function unlockScreen() {
    document.getElementById('LockScreen').classList.add('hidden');
    document.body.classList.remove('locked');

};

// this funciton creates desktop icons based on the softwares array
function createIcons() { 
    var container = document.getElementById('desktopIcons'); 

    softwares.forEach(function(softwares) {   // rename param to software (singular)
        var icon = document.createElement('div');
        icon.className = 'desktop-icon';
        icon.onclick = function() { 
            openWindow(softwares);
        };

        icon.innerHTML = `
                        <div class="icon-image">
                        <img src="${softwares.icons}" alt="${softwares.name}">
                         </div>
                        <div class="icon-label">${softwares.name}</div>`;
        container.appendChild(icon);
    }); 
}


//this function allowes the user to open the window when the icon is clicked

function openWindow(softwares) {
    var win = document.createElement('div'); // Create a new window element WITH A div 
    win.className = 'window'; // Assign the window class to the new div
    win.style.left = (50 + Math.random() * 100) + 'px'; // Randomize the left position of the window
    win.style.top = (50 + Math.random() * 100) + 'px'; // Randomize the top position of the window
    win.style.width = '500px'; // Set a default width for the window
    win.style.height = '400px'; // Set a default height for the window
    win.style.zIndex = ++zIndexCounter; // Set the z-index to ensure the window is on top


    win.innerHTML = '<div class="window-titlebar"><div class="window-title">' + softwares.name + '</div><div class="window-controls"><button class="window-control-btn btn-minimize" onclick="minimizeWindow(this)"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button><button class="window-control-btn btn-maximize" onclick="maximizeWindow(this)"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg></button><button class="window-control-btn btn-close" onclick="closeWindow(this)"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div></div><div class="window-content">' + softwares.content + '</div>';
     // Set the inner HTML of the window with title bar and content

    document.getElementById('Desktop').appendChild(win); // Append the new window to the desktop

    var titleBar = win.querySelector('.window-titlebar'); // Get the title bar element
    titleBar.addEventListener('mousedown', startDrag); // Add mousedown event listener to start dragging
    titleBar.addEventListener('touchstart', startDrag); // Add touchstart event listener for mobile devices                    


    win.addEventListener('mousedown', function() { // Add mousedown event listener to bring window to front
        win.style.zIndex = ++zIndexCounter;
    });



    // If the opened software is Contact, attach the form submit handler
      if (softwares.id === 'Contact') {
      const contactForm = win.querySelector('.contact-form');
      if (contactForm) {
            contactForm.addEventListener('submit', handleSubmit);
     }
    }

}


// make the buttons work functions 
function closeWindow(btn) {
    btn.closest('.window').remove();
}

function minimizeWindow(btn) {
    btn.closest('.window').style.display = 'none';
}

function maximizeWindow(btn) { // Toggle maximize/restore window
    var win = btn.closest('.window'); // Get the closest window element
    if (win.dataset.maximizeWindowd === 'true') { // Check if the window is already maximized
        win.style.left = win.dataset.oldLeft; // Restore old left position
        win.style.top = win.dataset.oldTop; // Restore old top position
        win.style.width = win.dataset.oldWidth; // Restore old width
        win.style.height = win.dataset.oldHeight; // Restore old height
        win.style.maximized = 'false'; // Update maximized state
    } else { // Maximize the window
        win.dataset.oldLeft = win.style.left; // Store old left position
        win.dataset.oldTop = win.style.top;
        win.dataset.oldWidth = win.style.width;
        win.dataset.oldHeight = win.style.height;
        win.style.left = '0';
        win.style.top = '0';
        win.style.width = '100%';
        win.style.height = 'calc(100% - 40px)';
        win.dataset.maximized = 'true';
    }
}

function startDrag(e) {
      draggedWindow = e.target.closest('.window');
      if (draggedWindow.dataset.maximized === 'true') return;
      
      var touch = e.touches ? e.touches[0] : e;
      offsetX = touch.clientX - draggedWindow.offsetLeft;
      offsetY = touch.clientY - draggedWindow.offsetTop;
      
      document.addEventListener('mousemove', drag);
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('touchend', stopDrag);
    }

function drag(e) {
      if (!draggedWindow) return;
      var touch = e.touches ? e.touches[0] : e;
      draggedWindow.style.left = (touch.clientX - offsetX) + 'px';
      draggedWindow.style.top = (touch.clientY - offsetY) + 'px';
    }

function stopDrag() {
      draggedWindow = null;
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('touchend', stopDrag);
    }

createIcons();