function setTotalPv(pv) {
    if(pv){
        const element = document.getElementById("total-pv");
        element.innerHTML = pv
        element.parentElement.style = "";
    }
}

async function totalPv() {
    const resp = await fetch(`https://api.eindex.me/pv/total`, {
        method: 'GET',
        mode: "cors",
        cache: "no-cache",
    })

    return resp.json()
} 

totalPv().then(data => setTotalPv(data.pv)).catch()