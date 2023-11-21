/** @type {import('./$types.js').PageLoad} */
    
function fetchFolderPage(FOLDER_LINK: string) {
    return fetch(FOLDER_LINK)
      .then(response => response.text())
      .then(textContent => textContent);
  }
  

function extractFileIds(html: string) {
    const regex = /data-id="([^"]+)"/g;
    const matches = [...html.matchAll(regex)];
    return matches.map(match => match[1]);
}

// Function to construct download links for each file ID
function constructDownloadLinks(fileIds: string[]) {
    const downloadLinks = fileIds.map(fileId => `https://drive.google.com/uc?export=download&id=${fileId}`);
    return downloadLinks;
}

// Function to extract file names from HTML using regular expressions
function extractFileNames(html:string ) {
    const regex = /data-tooltip="([^"]+)"/g;
    const matches = [...html.matchAll(regex)];

    const arr =  matches.map(match => match[1])

    const return_arr = []

    arr.forEach( (arr) => {
        if(arr.includes("Lecture")) {
            return_arr.push(arr)
        }  
    } )

    return return_arr
}

    export async function load({  }) {
        const FOLDER_LINK = "https://drive.google.com/drive/folders/1BDMkxdm9MkvVywynCBiyu5Jlttv3uWhz"

        const html =  await fetchFolderPage(FOLDER_LINK);

        // Construct and log download links
        const downloadLinks = constructDownloadLinks(extractFileIds(html));
        console.log("Download Links:", downloadLinks);

        // Extract and log file names
        const fileNames = extractFileNames(html);
        console.log("File Names:", fileNames);

        let combinedData = fileNames.map((name, index) => {
            return { names: name, link: downloadLinks[index] };
          });
        






            return {	
                info: combinedData
            };	
        
    }