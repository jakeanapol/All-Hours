// Function to handle table reservation
function reserveTable(tableId) {
    var table = document.getElementById(tableId);
    var statusDiv = document.getElementById("reservation-status");

    // Check if the table is already reserved
    if (table.classList.contains("reserved")) {
        alert("This table is already reserved.");
    } else {
        // Mark the table as reserved
        table.classList.add("reserved");
        statusDiv.innerHTML = "You have reserved " + tableId + ".";
    }
}
