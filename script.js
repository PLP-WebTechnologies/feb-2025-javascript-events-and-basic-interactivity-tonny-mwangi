// Event Handling 🎈

// Button click: Change text and color
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', () => {
    changeTextButton.textContent = "You Clicked Me!";
    changeTextButton.style.backgroundColor = "lightblue";
});

// Hover effects: Change button color on hover
changeTextButton.addEventListener('mouseover', () => {
    changeTextButton.style.backgroundColor = "lightgreen";
});
changeTextButton.addEventListener('mouseout', () => {
    changeTextButton.style.backgroundColor = "";
});

// Keypress detection: Log keypresses to the console
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Bonus: Secret action for double-click
changeTextButton.addEventListener('dblclick', () => {
    alert("Double-click detected! Secret action triggered!");
});

// Interactive Elements 🎮

// Image gallery/slideshow
const imageGallery = document.getElementById('imageGallery');
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image paths
let currentImageIndex = 0;

function updateGallery() {
    imageGallery.innerHTML = `<img src="${images[currentImageIndex]}" alt="Gallery Image" style="width: 300px; height: auto;">`;
}
updateGallery();

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGallery();
}, 3000); // Change image every 3 seconds

// Tabs/Accordion-style content
const tabs = document.createElement('div');
tabs.innerHTML = `
    <button class="tab" data-tab="1">Tab 1</button>
    <button class="tab" data-tab="2">Tab 2</button>
    <button class="tab" data-tab="3">Tab 3</button>
    <div id="tabContent"></div>
`;
document.body.appendChild(tabs);

const tabContent = document.getElementById('tabContent');
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (event) => {
        const tabNumber = event.target.getAttribute('data-tab');
        tabContent.textContent = `You can include notes about JavaScript magic in Tab ${tabNumber}`;
    });
});

// Bonus: Add animation using JS or CSS
changeTextButton.style.transition = "all 0.3s ease";
imageGallery.style.transition = "opacity 0.5s ease";

// Form Validation 📋✅
const validationForm = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Real-time feedback for email
emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "green";
    }
});

// Real-time feedback for password
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordInput.style.borderColor = "red";
    } else {
        passwordInput.style.borderColor = "green";
    }
});

// Form submission validation
validationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demo purposes
    if (!emailInput.validity.valid) {
        alert("Please enter a valid email address.");
    } else if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else {
        alert("Form submitted successfully!");
    }
});