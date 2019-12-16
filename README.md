# Team DBTBT

The intent of this project is to build a website that helps its users make sound financial decisions. The website will, upon being provided with a product of some sort, instead refer the user to a similarly-priced investment option.  

## GCP Server  
This part of the project is a web server hosted on GCP, designed to scrape Amazon for data on request. The server lives in serverjson.js, other files are only there for testing. Upon receiving a string from the main backend, this component then calls on amazon-buddy (an NPM package used for scraping Amazon's storefront - more information can be found at https://www.npmjs.com/package/amazon-buddy) to pull data from Amazon. It then sends that data back to the client in the form of a JSON object.  

## Team members
[Christian Daher](https://github.com/cdaher3/DBTBT/blob/master/team/Christian_Daher.md)  
[Yannis Lam](https://github.com/cdaher3/DBTBT/blob/master/team/Yannis_Lam.md)  
[Bhogesh Maddirala](https://github.com/cdaher3/DBTBT/blob/master/team/Bhogesh_Maddirala.md)  
[Matthew Lehoullier](https://github.com/cdaher3/DBTBT/blob/master/team/Matthew_Lehoullier.md)  
