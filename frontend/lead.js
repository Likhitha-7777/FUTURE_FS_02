const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const leads = JSON.parse(localStorage.getItem("leads")) || [];

const lead = leads[id];

if (lead) {

    document.getElementById("leadName").innerText = lead.name;
    document.getElementById("leadEmail").innerText = lead.email;
    document.getElementById("leadSource").innerText = lead.source;
    document.getElementById("status").value = lead.status;
}

function updateLead() {

    lead.status = document.getElementById("status").value;

    const note = document.getElementById("note").value;

    if (!lead.notes)
        lead.notes = [];

    if (note.trim() !== "")
        lead.notes.push(note);

    leads[id] = lead;

    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Lead Updated Successfully");

    window.location.href = "index.html";
}