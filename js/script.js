const _= e => document.getElementById(e);

const wrapper = _('wrapper'),
    CovidData = _('CovidData'),
    summary =   _('summary'),
    apiUrl  = 'https://api.covid19api.com/summary';


async function getData(){
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
};

const displayData = getData().then(data=>{
    const {Countries} = data;
    let html =`<div class="head col col1">Country</div>
    <div class="head col col2">Total Confirmed</div>
    <div class="head col col3">Total Recovered</div>
    <div class="head col col3">Total Deaths</div>`;
    Countries.map(({Country, TotalConfirmed, TotalDeaths, TotalRecovered}, index) =>{
        html +=`
        <div class="col col1">${Country}</div>
        <div class="col col2">${TotalConfirmed}</div>
        <div class="col col3">${TotalRecovered}</div>
        <div class="col col3">${TotalDeaths}</div>
        `
        CovidData.innerHTML = html;
    }).join();
})