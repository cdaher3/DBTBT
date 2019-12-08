# Team DBTBT

The intent of this project is to build a website that helps its users make sound financial decisions. The website will, upon being provided with a product of some sort, instead refer the user to a similarly-priced investment option.  

## Topic Requirements Completed 
Data Storage
Server-Side
Ajax
Websockets
Mobile

## Team Members
[Christian Daher](https://github.com/cdaher3/DBTBT/blob/master/team/Christian_Daher.md)  
[Yannis Lam](https://github.com/cdaher3/DBTBT/blob/master/team/Yannis_Lam.md)  
[Bhogesh Maddirala](https://github.com/cdaher3/DBTBT/blob/master/team/Bhogesh_Maddirala.md)  
[Matthew Lehoullier](https://github.com/cdaher3/DBTBT/blob/master/team/Matthew_Lehoullier.md)  
  
# Frontend Structure  
## index.js  
This is the main component that renders the website.

## app.js
This component is used for testing different components.

## navbarpage.js
This component routes all of the different react components.

## submit.js
This is the component that is the landing page on the website. It is a contains a form. When a user submits an input, it route redirects to the SearchResults.js component.

## search.js
This component contains experimental search live mapping.

## searchresults.js
This component fetches a json from the scraperclientjson.js and maps the results to the page. Each item is mapped to its corresponding amazon item and a stock price of similar value.

## product.js
This component fetches a json from query.js and maps the respective stock information to the page.

# Backend Structure  
## app.js  
This is the main backend server. It manages and serves all API requests, both to the Amazon scraper hosted on GCP and the stock database.  

## scraperclientjson.js  
This is the socket client that talks to the Amazon scraper hosted on GCP. It takes a string as a search term, passes it off to the scraper, and returns the scraper's response in JSON format.  
Any requests to the scraper can be made by making a get to dbtbt.com:3001/search/"searchterm" - for example, dbtbt.com:3001/search/carpet will search Amazon for carpets and return the results as a JSON object.  

## query.js  
This is the database client. It initiates a connection pool and serves two kinds of queries, price and ticker. URL format is dbtbt.com:3001/query/price="price" and dbtbt.com:3001/query/ticker="ticker" respectively; for example, dbtbt.com:3001/query/price=30 will return the most expensive stock under $30, and dbtbt.com:3001/query/ticker=AAPL will return Apple's stock price. These are both in the form of a JSON object.  
