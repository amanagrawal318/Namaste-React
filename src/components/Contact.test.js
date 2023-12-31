import { render, screen } from "@testing-library/react"
import Contact from "./Contact"
import "@testing-library/jest-dom"

describe("test contact page",()=>{
    test("Should render component",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading")
        //Assertions  
        expect(heading).toBeInTheDocument();
      });
      it("Should render Button on page",()=>{
          render(<Contact/>)
          const button=screen.getByText("Submit")
          //Assertions  
          expect(button).toBeInTheDocument();
        })
      it("Should render input field on page",()=>{
          render(<Contact/>)
          const inputName=screen.getByPlaceholderText("name")
          //Assertions  
          expect(inputName).toBeInTheDocument();
        })
      it("Should load two input box on page",()=>{
          render(<Contact/>)
          const inputBoxes=screen.getAllByRole("textbox")
      
        //   console.log(inputBoxes); //we get react node
          //Assertions  
          expect(inputBoxes.length).toBe(2);
        })
})