function loadData() {
    fetch("fetch.php")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.res === "success") {
                let tableBody = document.querySelector("table.content-table tbody");
                tableBody.innerHTML = ""; // Clear existing table data

                data.data.forEach(item => {
                    let tableRow = `
                        <tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.course}</td>
                        </tr>`;
                    tableBody.innerHTML += tableRow;
                });
            } else {
                alert("Failed to load user data.");
            }
        })
        .catch(error => {
            console.error("An error occurred while fetching user data:", error);
            alert("An error occurred while fetching user data. Please try again later.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
});
