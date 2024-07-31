function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRowEls = document.querySelectorAll('table.container tbody tr');

      function getMatchElements(input) {
         return [...tableRowEls].filter((rowEl) => rowEl.textContent.toLowerCase().includes(input.toLowerCase()));
      }

      function clearPreviousState () {
         [...tableRowEls].forEach((rowEl) => {
            rowEl.classList.remove('select');
         })
      }

      clearPreviousState();

      const searchFieldEl = document.getElementById('searchField');
      const matchRows = getMatchElements(searchFieldEl.value);

      matchRows.forEach((matchRow) => {
         matchRow.classList.add('select');
      })

      searchFieldEl.value = '';
   }
}
