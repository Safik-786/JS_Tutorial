async function fetchNasaData() {
    // Await directly on the fetch call
    let response = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=pxoCBI7McpChluoy7LfxKKDMMDqK8Esi34YDD2Kw');
        
    // Await the conversion to JSON
    let data = await response.json();
    
    // Log the data
    console.log(data);
    console.log(data.links.next)
}
let apiData= fetchNasaData()
