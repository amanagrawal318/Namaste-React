# Namaste-React

# Parcel

- dev build
- local server
- HMR-> Hot Module Replacement
- File Watching Algorithm -written in c++
- caching faster builds
- Image Optimisation
- Minimization
- bundling
- compress
- consistent hashing
- code splitting
- differential bundling - support older browsers
- diagnostic
- error handling
- HTTPS
- Tree Shaking- remove unused code
- different dev and prod build

# Chapter 6

- micro service/ monolith architecture
- Api data fetch
- CORS chrome extension
- Shimmer UI
- useState/useEffect
- Search functionality

# chapter 7

- Routing using react-router-dom
- dynamic routing
- client side routing - Dynamically update the content of SPA w.r.to URL - Dont do full page reloads
- Server side Routing - all pages comes from server -make network call get HTML/CSS/JS and loads the whole page

# chapter 8

- Class Based components
- props/state in class
- constructor
- ⭐⭐why we use super(props) in constructor everytime
- render
- Lifecycle methods in CBC
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount
- Render/commit phase [link](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram)
- setinterval/clearinterval in didMount/willUnmount

# chapter 9

- custom hooks
- implement online/offline status
- implement restaurantMenu/List of restaurant custom hooks
- In browser we get the large bundle of Index.js so we want to reduce to optimize the performance
- we use lazy loading to get small chunks of js bundle on going to that components
- Lazy loading
- suspense - fallback
- online/offline/slow 3g feature in dev tools
