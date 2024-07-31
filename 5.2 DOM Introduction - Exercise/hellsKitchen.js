function solve() {
   document.getElementById('btnSend').addEventListener('click', onClick);
 
   function onClick() {
     const input = document.querySelector('textarea').value;
     const restaurantData = JSON.parse(input);
     const restaurants = {};
 
     restaurantData.forEach(entry => {
       let [restaurantName, workersStr] = entry.split(' - ');
       let workers = workersStr.split(', ');
 
       if (!restaurants[restaurantName]) {
         restaurants[restaurantName] = {
           workers: [],
           avgSalary: 0,
           bestSalary: 0,
           totalSalary: 0
         };
       }
 
       workers.forEach(worker => {
         let [name, salary] = worker.split(' ');
         salary = Number(salary);
         restaurants[restaurantName].workers.push({ name, salary });
         restaurants[restaurantName].totalSalary += salary;
         restaurants[restaurantName].avgSalary = restaurants[restaurantName].totalSalary / restaurants[restaurantName].workers.length;
         if (restaurants[restaurantName].bestSalary < salary) {
           restaurants[restaurantName].bestSalary = salary;
         }
       });
     });
 
     let bestRestaurant = Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
 
     let [bestName, bestData] = bestRestaurant;
 
     let bestRestaurantOutput = `Name: ${bestName} Average Salary: ${bestData.avgSalary.toFixed(2)} Best Salary: ${bestData.bestSalary.toFixed(2)}`;
     document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
 
     bestData.workers.sort((a, b) => b.salary - a.salary);
     let workersOutput = bestData.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
     document.querySelector('#workers p').textContent = workersOutput;
   }
 }
