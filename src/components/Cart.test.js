import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "./RestaurantMenu"
import {act} from "react-dom/test-utils"
import mockdata from "./MockData/MockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../redux/appStore"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockdata)
        }
    })
})
it("Should load Restaurant Menu component",async()=>{
    await act(async()=> render(<Provider store={appStore}><RestaurantMenu/></Provider>))
    

})