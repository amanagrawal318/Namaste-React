import { render,screen } from "@testing-library/react"
import RestaurantCard from "./RestaurantCard"
import Mock_Res_card from "./MockData/RestaurantCardMock.json"
import { withPromotedLabel } from "./RestaurantCard"
import "@testing-library/jest-dom"

it("should Render RestaurantCard component with prop data", ()=>{
    render(<RestaurantCard resData={Mock_Res_card}/>)
    const resname=screen.getByText("Pizza Hut")
     expect(resname).toBeInTheDocument();
})

it("should Render RestaurantCard component with promoted label(HOC)", ()=>{
    const ResCardWithPromotedLabel=withPromotedLabel(RestaurantCard)
    render(<ResCardWithPromotedLabel resData={Mock_Res_card}/>)
    const labelName=screen.getByText("Fast Delivery")
     expect(labelName).toBeInTheDocument();
})