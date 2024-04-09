

const buttons = document.querySelectorAll(".off-button");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("off-button")) {
            button.innerText = "On";
            button.classList.replace("off-button", "on-button");
        } else {
            button.innerText = "Off";
            button.classList.replace("on-button", "off-button");
        }
    });
});

//     // Fetch the JSON data
//     fetch('earthquake_data.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (!data || !data.earthquakeData || !Array.isArray(data.earthquakeData)) {
//             console.error('Invalid or missing data in JSON:', data);
//             return;
//         }

//         // Get unique years from the JSON data
//         const uniqueYears = [...new Set(data.earthquakeData.map(entry => entry.Year))];

//         // Populate the year dropdown
//         const yearDropdown = document.getElementById('yearDropdown');
//         uniqueYears.forEach(year => {
//             const option = document.createElement('option');
//             option.value = year;
//             option.textContent = year;
//             yearDropdown.appendChild(option);
//         });

//         // Update the days dropdown based on the selected year
//         updateDaysDropdown();
//     })
//     .catch(error => console.error('Error fetching earthquake data:', error));

// // Function to update the days dropdown based on the selected year
// function updateDaysDropdown() {
//     const selectedYear = document.getElementById('yearDropdown').value;
//     const dayDropdown = document.getElementById('dayDropdown');

//     // Remove existing options
//     dayDropdown.innerHTML = '';

//     // Fetch the JSON data again
//     fetch('earthquake_data.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (!data || !data.earthquakeData || !Array.isArray(data.earthquakeData)) {
//                 console.error('Invalid or missing data in JSON:', data);
//                 return;
//             }

//             // Get unique days for the selected year
//             const uniqueDays = [...new Set(data.earthquakeData
//                 .filter(entry => entry.Year == selectedYear)
//                 .map(entry => entry.Day)
//                 .filter(day => day !== null))];

//             // Populate the days dropdown
//             uniqueDays.forEach(day => {
//                 const option = document.createElement('option');
//                 option.value = day;
//                 option.textContent = day;
//                 dayDropdown.appendChild(option);
//             });
//         })
//         .catch(error => console.error('Error fetching earthquake data:', error));
// }