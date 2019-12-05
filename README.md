# Team DBTBT

The intent of this project is to build a website that helps its users make sound financial decisions. The website will, upon being provided with a product of some sort, instead refer the user to a similarly-priced investment option.  

## Topic requirements  
Data storage  
Mobile  
Server-Side?  
Authentication?  

## Team members
[Christian Daher](https://github.com/cdaher3/DBTBT/blob/master/team/Christian_Daher.md)  
[Yannis Lam](https://github.com/cdaher3/DBTBT/blob/master/team/Yannis_Lam.md)  
[Bhogesh Maddirala](https://github.com/cdaher3/DBTBT/blob/master/team/Bhogesh_Maddirala.md)  
[Matthew Lehoullier](https://github.com/cdaher3/DBTBT/blob/master/team/Matthew_Lehoullier.md)  

# Backend structure  
## app.js  
This is the main backend server. It manages and serves all API requests, both to the Amazon scraper hosted on GCP and the stock database.  

## scraperclientjson.js  
This is the socket client that talks to the Amazon scraper hosted on GCP. It takes a string as a search term, passes it off to the scraper, and returns the scraper's response in JSON format.  
Any requests to the scraper can be made by making a get to dbtbt.com:3001/search/"searchterm" - for example, dbtbt.com:3001/search/carpet will search Amazon for carpets and return the results as a JSON object.  

## query.js  
This is the database client. It initiates a connection pool and serves two kinds of queries, price and ticker. URL format is dbtbt.com:3001/query/price="price" and dbtbt.com:3001/query/ticker="ticker" respectively; for example, dbtbt.com:3001/query/price=30 will return the most expensive stock under $30, and dbtbt.com:3001/query/ticker=AAPL will return Apple's stock price. These are both in the form of a JSON object.  
  
# awstest Branch: root folder is currently pullable into the apache directory on the server  
log in, cd to /var/www/html, run sudo git pull  
if it doesn't work, sudo  
Now running Node.js with Express
