// let leads = JSON.parse(localStorage.getItem("leads")) || [];

// function addLead() {

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const source = document.getElementById("source").value;

//     if (!name || !email || !source) {
//         alert("Please fill all fields");
//         return;
//     }

//     const lead = {
//         name: name,
//         email: email,
//         source: source,
//         status: "New",
//         notes: []
//     };

//     leads.push(lead);

//     localStorage.setItem("leads", JSON.stringify(leads));

//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("source").value = "";

//     loadDashboard();

//     alert("Lead Added Successfully!");
// }

// function loadDashboard() {

//     leads = JSON.parse(localStorage.getItem("leads")) || [];

//     const table = document.getElementById("leadTable");

//     table.innerHTML = "";

//     let newCount = 0;
//     let convertedCount = 0;

//     leads.forEach((lead, index) => {

//         if (lead.status === "New")
//             newCount++;

//         if (lead.status === "Converted")
//             convertedCount++;

//         table.innerHTML += `
//             <tr>
//                 <td>${lead.name}</td>
//                 <td>${lead.email}</td>
//                 <td>${lead.source}</td>
//                 <td>${lead.status}</td>
//                 <td>
//                     <a href="lead.html?id=${index}">
//                         View
//                     </a>
//                 </td>
//             </tr>
//         `;
//     });

//     document.getElementById("totalLeads").innerText = leads.length;
//     document.getElementById("newLeads").innerText = newCount;
//     document.getElementById("convertedLeads").innerText = convertedCount;
// }

// loadDashboard();

//========================================================================================================= 

const API = "http://localhost:5000/api/leads";

// Load all leads when page opens
window.onload = function () {
    loadLeads();
};

// Add Lead
async function addLead() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const source = document.getElementById("source").value.trim();

    if (!name || !email || !source) {
        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(API, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                source
            })

        });

        const data = await response.json();

        alert(data.message);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("source").value = "";

        loadLeads();

    } catch (error) {

        console.log(error);
        alert("Error adding lead");

    }

}

// Load Leads
async function loadLeads() {

    try {

        const response = await fetch(API);

        const leads = await response.json();

        const table = document.getElementById("leadTable");

        table.innerHTML = "";

        let newCount = 0;
        let convertedCount = 0;

        leads.forEach((lead) => {

            if (lead.status === "New")
                newCount++;

            if (lead.status === "Converted")
                convertedCount++;

            table.innerHTML += `
            <tr>
                <td>${lead.id}</td>
                <td>${lead.name}</td>
                <td>${lead.email}</td>
                <td>${lead.source}</td>
                <td>${lead.status}</td>
                <td>${new Date(lead.created_at).toLocaleDateString()}</td>
            </tr>
            `;

        });

        document.getElementById("totalLeads").innerText = leads.length;
        document.getElementById("newLeads").innerText = newCount;
        document.getElementById("convertedLeads").innerText = convertedCount;

    } catch (error) {

        console.log(error);
        alert("Cannot load leads.");

    }

}