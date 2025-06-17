async function searchDSA() {
    const query = document.getElementById('searchBox').value;
    const res = await fetch(`http://localhost:3000/search?q=${query}`);
    const data = await res.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "";

    if (data.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    data.forEach(item => {
        const el = document.createElement("div");
        el.innerHTML = `<h3>${item.topic}</h3><p>${item.description}</p><hr>`;
        resultsDiv.appendChild(el);
    });
}
