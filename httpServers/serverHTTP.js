const series = require("./series");
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let serie;
  switch (req.url) {
    case "/":
      const listOfLinks = series
      .getSeries()
      .map((serie) => {
        return `<li><a href=${serie.handler}>${serie.name}</a></li>`;
      })
      .join("");
      res.end(`
        <html>
            <head>
                <title>Series to watch</title>
            </head>
            <body>
                <h1 style="text-align: center;">Series to watch</h1>
                <ul>
                    ${listOfLinks}
                </ul>
            </body>
        </html>
    `);
      break;
    case "/loki":
      serie = series.getSeries().find((s) => s.handler === "loki");
      res.end(`
        <html>
            <head>
                <title>Series to watch</title>
            </head>
            <body>
                <h1 style="text-align: center;">${serie.name}</h1>
                <p>Release Date: ${serie.releaseDate}</p>
                <p>Number of Series: ${serie.numberOfSeries}</p>
                <p>Total Number of Episodes: ${serie.numberOfEpisodes}</p>
                <h4>Description:</h4>
                <p>${serie.description}</p>
                <a href="/">Return to the main page</a>
            </body>
        </html>
    `);
      break;
    case "/wanda-&-vision":
      serie = series.getSeries().find((s) => s.handler === "wanda-&-vision");
      res.end(`
        <html>
            <head>
                <title>Series to watch</title>
            </head>
            <body>
                <h1 style="text-align: center;">${serie.name}</h1>
                <p>Release Date: ${serie.releaseDate}</p>
                <p>Number of Series: ${serie.numberOfSeries}</p>
                <p>Total Number of Episodes: ${serie.numberOfEpisodes}</p>
                <h4>Description:</h4>
                <p>${serie.description}</p>
                <a href="/">Return to the main page</a>
            </body>
        </html>
    `);
      break;
    case "/dc-legends-of-tomorrow":
      serie = series
        .getSeries()
        .find((s) => s.handler === "dc-legends-of-tomorrow");
      res.end(`
          <html>
              <head>
                  <title>Series to watch</title>
              </head>
              <body>
                  <h1 style="text-align: center;">${serie.name}</h1>
                  <p>Release Date: ${serie.releaseDate}</p>
                  <p>Number of Series: ${serie.numberOfSeries}</p>
                  <p>Total Number of Episodes: ${serie.numberOfEpisodes}</p>
                  <h4>Description:</h4>
                  <p>${serie.description}</p>
                  <a href="/">Return to the main page</a>
              </body>
          </html>
      `);
      break;
    case "/agents-of-shield":
      serie = series.getSeries().find((s) => s.handler === "agents-of-shield");
      res.end(`
          <html>
              <head>
                  <title>Series to watch</title>
              </head>
              <body>
                  <h1 style="text-align: center;">${serie.name}</h1>
                  <p>Release Date: ${serie.releaseDate}</p>
                  <p>Number of Series: ${serie.numberOfSeries}</p>
                  <p>Total Number of Episodes: ${serie.numberOfEpisodes}</p>
                  <h4>Description:</h4>
                  <p>${serie.description}</p>
                  <a href="/">Return to the main page</a>
              </body>
          </html>
      `);
      break;
      case "/the-100":
      serie = series.getSeries().find((s) => s.handler === "the-100");
      res.end(`
          <html>
              <head>
                  <title>Series to watch</title>
              </head>
              <body>
                  <h1 style="text-align: center;">${serie.name}</h1>
                  <p>Release Date: ${serie.releaseDate}</p>
                  <p>Number of Series: ${serie.numberOfSeries}</p>
                  <p>Total Number of Episodes: ${serie.numberOfEpisodes}</p>
                  <h4>Description:</h4>
                  <p>${serie.description}</p>
                  <a href="/">Return to the main page</a>
              </body>
          </html>
      `);
      break;
    default:
      res.end(`
        <html>
            <head>
                <title>Node app</title>
            </head>
            <body>
                <h1 style="text-align: center;">404 Not Found</h1>
                <a href="/">Return to the main page</a>
            </body>
        </html>
    `);
      break;
  }
});

server.listen(port, () => {
  console.log(
    "Server is listening on port ",port);
});
