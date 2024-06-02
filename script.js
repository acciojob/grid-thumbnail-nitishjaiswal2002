document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById('grid-container');
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.addEventListener('click', function() {
      const expandedItem = document.querySelector('.grid-item.expanded');

      if (expandedItem) {
        expandedItem.classList.remove('expanded');
        gridItems.forEach(item => item.classList.remove('hidden'));
      }

      if (expandedItem !== this) {
        this.classList.add('expanded');
        gridItems.forEach(item => {
          if (!item.classList.contains('expanded')) {
            item.classList.add('hidden');
          }
        });
      }
    });
  });
});
