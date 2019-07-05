# Netflix Originals Calendar

> Netflix needs a calendar application that displays our slate of upcoming original titles for the year. The task is to create a Calendar UI that displays Netflix Original launches. 


![Image of app details](https://netflix-screen.s3.amazonaws.com/screen3.png)


## Installation

Install all dependencies 
```sh
npm install
```
and then
```sh
npm run dev
```

This will concurrently run the server and the client.

## :white_check_mark: Server 

The application contains a simple node (express) server, that receives the requests for the endpoint `api/events/year/month` and will return the events json.

It contains a small middleware `DateMiddleware` to parse the events by date, simulating a DB request.

There is a `data-events` json with more than 1000 real movies/shows from netflix.


## :calendar: Client

Here is the real deal, the frontend base was created using create-react-app to save time on bundlers, linters and configurations.


UI: The views and components state are managed by React, using the latest features as:
* Hooks 
* Portals
* Lazy components
* Suspense
* Fragment

CSS: Even when css-in-js is very trendy, i used a more classic approach using `sass` files, with reusable variables, there is a cool css netflix logo that appears as the loading indicator when the calendar events are loading.

State management: I didn't use any state management because the app is small and doesn't share state to components outside, i keep the internal state using `useState` hook. I would have used them in this order depending on the size of the app -> React.Context, Mobx or Redux

Router: for routing i used `react-router-dom` to handle the route params and use them for the requests, Then main route looks like: `/year/month` and when we send an invalid date it will parse and return depending on the provided params.

Requests: for the HTTP requests library i used axios, just because it supports promises, so i can use the `async await` syntax, but I could have chosen any other that uses promises like superagent.

Dates: I used `date-fns`, it a very useful, well documented and simple library for dates, i prefer it more than moment.js

Performance: In order to improve the performance and handle the thousand of objects from `data-events` json, i made that the requests for only the current month you are viewing, If the user doesnt specify a year and month in the url or enters an invalid number, it will redirect you to the current date. I was planning to add memoization but due to the time i didn't implement it.

---

:rocket: Thank you for the time and opportunity.