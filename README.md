# Primary Bid project

## Set up
 - `docker-compose build`
 - `docker-compose up`
 - open `http://localhost:3000/`

## Test
 - `cd ui`
 - `npm run test`

## Notes about the project
This project is an implementation of a URL minifier.
Due to the lack of time, this implementation has a few caveats:
 - The api is not tested
 - The api implemetation follows a simple onion approach
 - The ui has a few tests examples (but does not reach 100% coverage), using both snapshots and funtionality testing
 - Genereting the short url is optimistic, and will assume that the generate function will not return two identical values (moving forward, a potential fix could be to verify that this url does not already exist and retry to generate a new one until it passes, or reach a certain value of retries)
 - the CSS is extremelly simple as advised on the task

## Questions?
 - Due to time boxing this task, there are a fair few ways of improving this project - but I would be more than happy to clarify and answer any questions you may have