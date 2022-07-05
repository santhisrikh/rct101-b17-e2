# Problems

#### Problem 1

- Create a Video Player
- It should have 3 buttons, START, PAUSE, SKIP BY 30 SECONDS
- use useRefs to manage this
- on clicking start button, you should start the video
- on clicking pause button, you should pause video
- skip by 30 seconds means you should skip the video by 30 seconds
- use the Button component provided to you
- do not remove any data-testid values
- Do this in the Video.jsx file

#### Problem 2

- Create an app for listing user information
- List a set of 100 users provided by you
- You need to use the fakeFetch function in `/utils/fakeFetch.js`
- fakeFetch will provide to you { data: [], totalPages: number }
- There needs to be a set of buttons for pagination
  - if there are 10 per page, it will be 10 buttons
  - the current page needs to be disabled
  - you need to complete what is given in the `Pagination` component
- A checkbox for deciding if an element is ascending or descending
  - by default it should be checked
- A select box for deciding how many elements per page
  - it should have 10,20 as options
  - when you are having 10 option, there should be 10 pages button (100 is the total 100 items, this comes from the fakeFetch.js )
- The checkbox and select box are inside a `Filters` component
- UserCard component will accept two property: `name`, `avatar`
  - please make sure the spelling is correct
- on clicking the checkbox, or the per page or change the pagination, you shuold be able to fetch data again, use the useEffect and dependencies for this
- There needs to be a loading indicator when fetching happens
- There needs to be an error indicator when error happens
- fakeFetch:
  - `fakeFetch({ page: 1, limit: 5, orderBy: "asc" })`
  - it accepts an object with page, limit, and orderBy
- You dont need to create any new components, you need to finish what is provided to you
