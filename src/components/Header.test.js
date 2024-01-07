import { fireEvent, render,screen } from "@testing-library/react"
import Header from "./Header"
import { Provider } from "react-redux"
import appStore from "../redux/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
describe("Header component",()=>{
    it("Should render header component in the page",()=>{
        render(<BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>)
        
        const loginButton=screen.getByRole('button')
        expect(loginButton).toBeInTheDocument();
    });

    it("Should check cart items with 0 items",()=>{
        render(<BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>)
        
        const cartItems=screen.getByText("🛒(0)")
        expect(cartItems).toBeInTheDocument();
    });

    it("Should change to logout once button is clicked",()=>{
        render(<BrowserRouter>
          <Provider store={appStore}>
             <Header/>
          </Provider>
        </BrowserRouter>)
        
        const loginButton=screen.getByRole('button',{name:"Login"})
        fireEvent.click(loginButton)
        const logOutButton=screen.getByRole('button',{name:"Logout"})
        expect(logOutButton).toBeInTheDocument();
    });

    it("Should change to login when button is clicked on logout",()=>{
      render(<BrowserRouter>
        <Provider store={appStore}>
           <Header/>
        </Provider>
      </BrowserRouter>)
      
      const loginButton=screen.getByRole('button',{name:"Login"})
      fireEvent.click(loginButton)
      const logOutButton=screen.getByRole('button',{name:"Logout"})
      fireEvent.click(logOutButton)
      expect(loginButton).toBeInTheDocument();
  });

  it("Should render online status" ,()=>{
    render(<BrowserRouter>
      <Provider store={appStore}>
         <Header/>
      </Provider>
    </BrowserRouter>)

    const result=screen.getByText("Online🟢");
    expect(result).toBeInTheDocument();
  })
})
