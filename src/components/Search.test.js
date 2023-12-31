import { fireEvent, render, screen } from "@testing-library/react"
import UserClass from "./UserClass"
import {act} from "react-dom/test-utils"
import mockData from "./MockData/UserMockData.json"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../redux/appStore"
import Body from "./Body"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockData)
        }
    })
})

it("Should render User class component with fetch data",async()=>{

    await act(async()=> render(<UserClass/>))
    
    const name=screen.getByText("Name : amanagrawal318");
    expect(name).toBeInTheDocument();
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