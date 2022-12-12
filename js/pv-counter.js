function setPv(pv) {
    if(pv){
        const element = document.getElementById("pv");
        element.innerHTML = pv
        element.parentElement.style = "";
    }
}

async function pv() {
    const pageURL = new URL(window.location);
    const resp = await fetch(`https://api.eindex.me/pv?url=${pageURL.pathname}`, {
        method: 'PUT',
        mode: "cors",
        cache: "no-cache",
    })

    return resp.json()
} 

pv().then(data => setPv(data.pv)).catch()