// Technical 5th step handled in createPdf where all the information passed along the function path is used to fill in content details.

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};


function generatePdfContent(data, gitHubInfo) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
     <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
     <title>Document</title>
     <style>
         @page {
           margin: 0;
         }
        *,
        *::after,
        *::before {
        box-sizing: border-box;
        }
        html, body {
        padding: 0;
        margin: 0;
        }
        html, body, .wrapper {
        height: 100%;
        }
        .wrapper {
        background-color: ${colors[data].wrapperBackground};
        padding-top: 100px;
        }
        body {
        background-color: white;
        -webkit-print-color-adjust: exact !important;
        font-family: 'Cabin', sans-serif;
        }
        main {
        background-color: #E9EDEE;
        height: auto;
        padding-top: 30px;
        }
        h1, h2, h3, h4, h5, h6 {
        font-family: 'BioRhyme', serif;
        margin: 0;
        }
        h1 {
        font-size: 3em;
        }
        h2 {
        font-size: 2.5em;
        }
        h3 {
        font-size: 2em;
        text-align:center;
        }
        h4 {
        font-size: 1.5em;
        text-align:center;
        }
        h5 {
        font-size: 1.3em;
        }
        h6 {
        font-size: 1.2em;
        }
        .photo-header {
        position: relative;
        margin: 0 auto;
        margin-bottom: -50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: ${colors[data].headerBackground};
        color: ${colors[data].headerColor};
        padding: 10px;
        width: 95%;
        border-radius: 6px;
        }
        .photo-header > img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: -75px;
        border: 6px solid ${colors[data].photoBorderColor};
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
        }
        .photo-header h1, .photo-header h2 {
        width: 100%;
        text-align: center;
        }
        .photo-header h1 {
        margin-top: 10px;
        }
        .links-nav {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 1.1em;
        display: flex;
        justify-content: center;
        }
        .links-nav div{
          padding: 0 5px;
        }
        .links-nav div a{
          padding: 0 5px;
        }
        .nav-link {
        display: inline-block;
        margin: 5px 10px;
        }
        .workExp-date {
        font-style: italic;
        font-size: .7em;
        text-align: right;
        margin-top: 10px;
        }
        .container {
        padding: 50px;
        padding-left: 100px;
        padding-right: 100px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .card {
          padding: 20px;
          border-radius: 6px;
          background-color: ${colors[data].headerBackground};
          color: ${colors[data].headerColor};
          margin: 20px;
          width: calc(50% - 40px);
        }
        
        .col {
        flex: 1;
        text-align: center;
        }

        .col h2 {
         margin-top:40px;
        }

        a, a:hover {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
        }

        #svg1,#svg2,#svg3, .svg3Fill{
          fill: ${colors[data].headerColor};
        }

        @media print { 
         body { 
           zoom: .75; 
         } 
        }
     </style>
</head>
<body>
 <section class="wrapper">
   <div class="photo-header">
     <img src="https://avatars0.githubusercontent.com/u/7953320?s=460&v=4" alt="Andy Durette portrait">
     <h1>My name is ${gitHubInfo.name}</h1>
     
     <div class="links-nav">
     <div>
     <svg id="svg1" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25">
<path d="M12.5,0.243c-3.661,0-6.628,2.563-6.628,5.724C5.872,7.286,12.494,25,12.494,25s6.634-17.706,6.634-19.033  C19.128,2.806,16.16,0.243,12.5,0.243z M12.5,11.52c-2.272,0-4.114-1.843-4.114-4.115c0-2.272,1.842-4.114,4.114-4.114  c2.273,0,4.115,1.842,4.115,4.114C16.615,9.677,14.773,11.52,12.5,11.52z"/>
</svg>

  <a href="https://www.google.com/maps/place/${gitHubInfo.location}">Location</a> </div>
     <div><?xml version="1.0" encoding="utf-8"?>
     <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
     <svg version="1.1" id="svg2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve">
     <g>
       <path fill="#FFF" d="M12.55,0.601C5.619,0.601,0,6.219,0,13.15c0,5.435,3.456,10.057,8.288,11.8c0,0,0.313,0.11,0.784,0.001
         c0.389-0.089,0.375-0.556,0.375-0.556c0.089-0.584-0.045-2.339-0.045-2.339c-1.589,0.436-2.114,0.181-2.114,0.181
         c-1.485-0.45-1.845-1.261-1.845-1.261c-0.179-0.224-0.299-0.583-0.299-0.583c-0.165-0.644-1.32-1.665-1.32-1.665
         c-0.63-0.404-0.45-0.585-0.45-0.585c1.26-0.449,2.159,0.675,2.159,0.675c0.585,0.945,1.306,1.53,1.306,1.53
         c1.034,0.628,2.609,0.044,2.609,0.044c0.135-0.989,0.765-1.709,0.765-1.709c-3.329-0.314-4.273-1.844-4.273-1.844
         c-2.924-3.914-0.045-7.647-0.045-7.647C5.308,7.078,6.028,5.954,6.028,5.954c1.665-0.135,3.329,1.214,3.329,1.214
         c3.463-0.899,6.341,0.045,6.341,0.045c2.475-1.574,3.329-1.304,3.329-1.304c0.855,1.664,0.181,3.329,0.181,3.329
         c2.429,2.563,0.675,6.433,0.675,6.433c-1.17,2.878-5.083,3.014-5.083,3.014c0.809,0.719,0.854,1.979,0.854,1.979v3.555
         c-0.079,0.904,0.701,0.776,0.899,0.73c-0.144-0.068,7.872-1.916,8.547-11.797C25.572,6.236,19.481,0.601,12.55,0.601z"/>
       <path fill="#FFF" d="M8.747,20.933c0-0.099,0.133-0.179,0.298-0.179c0.164,0,0.297,0.08,0.297,0.179s-0.133,0.179-0.297,0.179
         C8.88,21.111,8.747,21.031,8.747,20.933z"/>
       <path fill="#FFF" d="M7.824,21.081c0-0.1,0.133-0.179,0.299-0.179c0.164,0,0.297,0.079,0.297,0.179S8.286,21.26,8.123,21.26
         C7.957,21.26,7.824,21.181,7.824,21.081z"/>
       <path fill="#FFF" d="M6.817,20.873c0.02-0.096,0.166-0.148,0.328-0.116c0.161,0.034,0.275,0.139,0.256,0.235
         c-0.02,0.097-0.167,0.148-0.328,0.115S6.798,20.97,6.817,20.873z"/>
       <path fill="#FFF" d="M5.946,20.222c0.057-0.079,0.212-0.065,0.346,0.03c0.133,0.097,0.194,0.24,0.136,0.319
         c-0.059,0.08-0.213,0.066-0.347-0.029C5.949,20.445,5.887,20.302,5.946,20.222z"/>
       <path fill="#FFF" d="M5.518,19.494c0.083-0.053,0.222,0.017,0.311,0.156c0.087,0.138,0.091,0.295,0.008,0.347
         c-0.083,0.053-0.221-0.018-0.31-0.154C5.438,19.702,5.435,19.547,5.518,19.494z"/>
       <path fill="#FFF" d="M5.052,18.865c0.064-0.041,0.17,0.012,0.238,0.118s0.071,0.227,0.007,0.266
         c-0.063,0.04-0.17-0.013-0.238-0.119C4.991,19.024,4.988,18.904,5.052,18.865z"/>
       <path fill="#FFF" d="M4.55,18.44c0.054-0.034,0.144,0.011,0.201,0.101s0.06,0.191,0.005,0.227
         c-0.054,0.033-0.144-0.013-0.201-0.102C4.498,18.576,4.495,18.474,4.55,18.44z"/>
     </g>
     </svg>
     <a href="${gitHubInfo.html_url}">GitHub</a> </div>
     <div><?xml version="1.0" encoding="utf-8"?>
     <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
     <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
     <svg version="1.1" id="svg3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve">
     <path class="svg3Fill" d="M-61.25-21.257c-3.661,0-6.628,2.563-6.628,5.724c0,1.318,6.622,19.033,6.622,19.033s6.634-17.706,6.634-19.033
       C-54.622-18.694-57.59-21.257-61.25-21.257z M-61.25-9.98c-2.272,0-4.114-1.843-4.114-4.115c0-2.272,1.842-4.114,4.114-4.114
       c2.273,0,4.115,1.842,4.115,4.114C-57.135-11.823-58.977-9.98-61.25-9.98z"/>
     <circle class="svg3Fill" cx="6.99" cy="18.008" r="2.934"/>
     <path class="svg3Fill" d="M3.621,13.956c1.977-2.406,5.282-2.959,7.383-1.234c2.103,1.723,2.204,5.074,0.227,7.481
       c-0.601,0.731-1.326,1.29-2.102,1.669c1.404-0.16,2.75-0.843,3.718-2.021c1.975-2.41,1.626-5.963-0.781-7.939
       c-2.407-1.977-5.961-1.627-7.938,0.783c-0.518,0.631-0.873,1.345-1.075,2.086C3.219,14.496,3.405,14.219,3.621,13.956z"/>
     <path class="svg3Fill" d="M3.049,11.109c2.861-3.812,7.879-4.878,11.205-2.378c3.329,2.493,3.707,7.611,0.844,11.42
       c-0.87,1.158-1.941,2.064-3.102,2.694c2.136-0.341,4.149-1.473,5.55-3.339c2.86-3.815,2.091-9.225-1.721-12.086
       C12.012,4.56,6.601,5.328,3.739,9.145c-0.75,0.998-1.244,2.114-1.505,3.26C2.47,11.959,2.736,11.525,3.049,11.109z"/>
     <path class="svg3Fill" d="M1.187,7.938c4.16-5.542,11.455-7.093,16.29-3.457c4.843,3.623,5.392,11.064,1.227,16.604
       c-1.265,1.684-2.822,3.001-4.51,3.916c3.107-0.493,6.033-2.141,8.07-4.854c4.157-5.548,3.039-13.411-2.503-17.572
       C14.218-1.585,6.35-0.468,2.189,5.082C1.099,6.532,0.381,8.154,0,9.82C0.344,9.172,0.731,8.544,1.187,7.938z"/>
     </svg><a href="${gitHubInfo.blog}">Blog</a> </div>
     </div>
   </div>
   <div class="row">
       <div class="col">
       <h2>${gitHubInfo.bio}</h2>
       </div>
   </div>
   
   <main class="row">
     <div class="card">
      <h3>Public Repositories</h3>
      <h4>${gitHubInfo.public_repos}</h4>
     </div>
     <div class="card">
      <h3>Followers</h3>
      <h4>${gitHubInfo.followers}</h4>
     </div>
     <div class="card">
      <h3>GitHub Stars</h3>
      <h4>${gitHubInfo.starred}</h4>
     </div>
     <div class="card">
      <h3>Following</h3>
      <h4>${gitHubInfo.following}</h4>
     </div>
   </main>
     
 </section>
 
</body>
</html>
      `
}


exports.colors = colors;
exports.generatePdfContent = generatePdfContent;