# adbeans-assessment

BoardGameAtlas Collection Finder is a simple Single Page Application (SPA) that fetches data from the [BoardGameAtlas API](https://www.boardgameatlas.com/api/docs) to display a user collection. It was originally created as a takehome assessment.

## Highlights

- Created with React
- Responsive
- Follows DRY and SOLID approaches for designing code
- Open Source

## Demo

https://bggcg.netlify.app/

## Installation

After installing node and all the project dependencies using the `npm install` command, type

```bash
  npm start
```

to start the project.

To run tests, type

```bash
  npm test
```

## To Do

- Create individual component to show when data is being loaded into the table and style it
- Create individual component to show when an error ocurred when fetching data to the table and style it
- Create individual component for a link in the menu
- Update function that saves fetched data to only fetch data from API when it is different from the current data
- Create button to allow manually updating the table
- Embed my resume in about page when viewport is large enough
- Make padding/margin area inside column headers clickable (i.e. activate sort)
- Better align hamburger icon menu

Tests:

- If menu items are hidden, clicking on toggle hamburger button will show them
- If menu items are visible, clicking on toggle hamburger button will hide them
- Clicking on the List link will open the List page
- Clicking on the About link will open the About page
- Clicking on the resume button will open my resume in a new tab
- When app opens, data is loaded and shows up in the table
- When clicking on a table header, data is sorted
- When clicking on hamburger item inside table header, the filter tab will be shown
- While data is loading, display "loading" message
- If data can't be fetched, display error message
