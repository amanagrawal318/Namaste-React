import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import UserClass from "./UserClass"
import {act} from "react-dom/test-utils"
import mockData from "./MockData/UserMockData.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../redux/appStore"
import Body from "./Body"
import { fetchRestaurants } from "../redux/restaurantsSlice"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockData)
        }
    })
})

it("Should render all the shimmer res card initially ",async()=>{

    await act(async()=> render(<Provider store={appStore}><Body/></Provider>))
    
    const result=screen.getAllByTestId("shimmer-res-card")
    // console.log(result.length);
    expect(result.length).toBe(20);
})

it("Should render",async()=>{

    await act(async()=> render(<Provider store={appStore}><Body/></Provider>))
    
    // let swiggydata=await fetchRestaurants();
    // console.log(swiggydata);
    // await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
    // const result=screen.getAllByTestId("shimmer-res-card")
    // console.log(result.length);
    // expect(result.length).toBe(20);
})
// it("Should render Body component with fetch data",async()=>{

//     render(<BrowserRouter><Provider store={appStore}><Body/></Provider></BrowserRouter>)
      /// will see later it giving some
//     console.log("newyear");
//     const searchBtn=screen.getByRole("button",{name:"search"});
//     const searchInput= screen.getByTestId("searchText");
//     fireEvent.change(searchInput,{target:{value:"burger"}});
//     fireEvent.click(searchBtn);
//     //load 4 res card
//     const card=screen.getAllByTestId("resCard");
//     console.log("Aman"+card.length);
//     expect(card.length).toBe(3);
// })