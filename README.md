## Features:

The app uses [TheMovieDBAPI](https://developers.themoviedb.org/3) to:

- suggest movies
- title/year based movie search

### To run locally:

1. Get TMDB api key from [HERE](https://developers.themoviedb.org/3/getting-started/introduction)
2. Change .env.template into .env, replace REACT_APP_API_KEY
3. Run

```
npm start

```

4. The app should open on localhost:3000

To run the tests (have the server running locally) and run:

```
npm run cypress:open
```

### Demo:

## Desktop

<img src="https://i.imgur.com/o94rr11.png" alt="drawing" width="700"/>

## Mobile

<img src="https://i.imgur.com/Gg1PlBe.png" alt="drawing" width="350"/>

### Tasks:

#### General

- [x] get colour scheme to one place
      Comments:
- SCSS could be replaced by GlobalStyles from styled-components to keep everything in one place

#### Design

- [x] Mobile-responsive
  - [x] mockups
- [x] Desktop
  - [x] mockups + specific measurements
- [ ] Accessibility

#### Discover

- [x] Preload and set popular movies and movie genres when page loads
- [x] Update search results based on search query and year

#### Fetcher

- [x] Link up with API
      Comments:
- Fetcher can be further refactored

#### Real-time search bar

- [x] debounce requests

#### Filtercategories

- [x] create expandable/collapsable options

#### SideNav

- [x] button sideNav for mobile
- [x] replace with icons
- [x] sideNav slides in

#### Filters

- [x] expandable filters
- [ ] implement filters for Mobile

#### Additional

- [ ]? testing
- [x] README
- [ ] Reporting
- [ ] Error handling (ErrorHandler component, error toasts)
