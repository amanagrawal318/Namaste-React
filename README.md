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

# chapter 10

- install Tailwind css
- tailwindcss.com -> choose framework(parcel) -> follow steps
- create index.css -> input some tailwind line into it - reference
- install tailwind css intellisense extension in vs code

# chapter 11

- HOC- Higher Order Component
- HOC- To enhance the component and give it back
- create Accordian of category
- Data layer/UI layer
- react dev tools extension- components- profiler features
- lifting the state up
- controlled and uncontrolled components
- Props drilling- passing props to 1st level to 3rd ya 4th level meanwhile b/w child is of no use of props
- useContext to resolve props drilling
- UserContext.provider / UserContext.consumer
- tied state variable to user context

# chapter 12

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice - cartslice- created cartslice
- dispatch(action)
- Selector
- redux toolkit provides better and simple way to write redux
- redux toolkit uses Immer library
- redux toolkit mutate the data - older version doesnot mutable
- redux dev tools

# redux thunk / middleware

- fetch Api data through redux
- created menuslice
- apply middleware
- used thunk to get api data
- use createAsyncThunk to fetch API data of restaurant menu and stored in redux
- After that categories and restaurant info is subscribed throught the store
- Axios library used
- fetch Swiggy restaurant data from api
- stored restaurants in redux using createAsyncThunk
- also creted some reducer to manage restaurant on search and top rated restaurants
