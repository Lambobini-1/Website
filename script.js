document.getElementById('imageUpload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  const preview = document.getElementById('imagePreview');
  preview.innerHTML = '';

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = '<p>No image yet! Upload one below. 😊</p>';
  }
});
