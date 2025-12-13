// Mock gallery images
const galleryGrid = document.getElementById('galleryGrid');
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg'
];

images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  galleryGrid.appendChild(img);
});

// Guestbook
const form = document.getElementById('guestbookForm');
const messagesDiv = document.getElementById('messages');
const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem('guestbook') || '[]');
  messagesDiv.innerHTML = '';
  messages.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'event';
    div.innerHTML = `<strong>${msg.name}:</strong> ${msg.message}`;
    messagesDiv.appendChild(div);
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('guestName').value;
  const message = document.getElementById('guestMessage').value;
  const messages = JSON.parse(localStorage.getItem('guestbook') || '[]');
  messages.unshift({ name, message });
  localStorage.setItem('guestbook', JSON.stringify(messages));
  loadMessages();
  form.reset();
});

loadMessages();

// Upload (just display file names)
const fileInput = document.getElementById('fileUpload');
const uploadStatus = document.getElementById('uploadStatus');
fileInput.addEventListener('change', () => {
  const files = Array.from(fileInput.files);
  uploadStatus.innerHTML = files.map(f => `<p>${f.name} ready to upload</p>`).join('');
});
