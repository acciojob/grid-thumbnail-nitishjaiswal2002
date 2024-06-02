//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      if (thumbnail.classList.contains('expanded')) {
        thumbnail.classList.remove('expanded');
        thumbnails.forEach(thumb => thumb.classList.remove('hidden'));
      } else {
        thumbnails.forEach(thumb => thumb.classList.add('hidden'));
        thumbnail.classList.add('expanded');
        thumbnail.classList.remove('hidden');
      }
    });
  });
});
