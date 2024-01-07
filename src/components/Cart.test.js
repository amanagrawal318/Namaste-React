import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "./RestaurantMenu"
import {act} from "react-dom/test-utils"
import mockdata from "./MockData/MockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../redux/appStore"
import JSDOMEnvironment from "jest-environment-jsdom"
import axios from "axios"
jest.mock('axios');

it("Should load Restaurant Menu component",async()=>{
    await act(async()=> render(<Provider store={appStore}><RestaurantMenu/></Provider>))
    axios.get.mockImplementationOnce(() => Promise.resolve(mockdata));

})