// this file is chosen because all the elements are in the app.js file
import React from "react";
import { AboutUs } from "./components/AboutUs";
import {render, screen} from "@testing-library/react";
import AddContactfromAPI from "./components/AddContactfromAPI";
import Header from "./components/Header";
import App from "./App";
import {render as renderer, unmountComponentAtNode } from "react-dom";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";

let element;

beforeEach(()=>{
  element = document.createElement('div');
  document.body.appendChild(element);
})

afterEach(()=>{
  unmountComponentAtNode(element);
  element.remove();
  element =null;
})


describe("contact manager test cases",()=>{
  test('should render aboutus component',()=>{
    render(<AboutUs />)
  })
  test('check for h2 in about us',()=>{
    render(<AboutUs />)
    expect(screen.getByText('About Us')).toBeInTheDocument();
  })


  //the header components was not inside the router so therefore it can only be rendered via its parent ie parent
  test('should render header component with contact manager text',()=>{
    render(<App />)
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();
  })

  //WITHOUTusing the screen object
  test('should render header component with contact manager text (without screen)',()=>{
    const {getByText} = render(<App/>)
    expect(getByText('Contact Manager')).toBeInTheDocument();
  })

  //check how many links in the header page - should be 6
  test('should have 6 links in header comp',()=>{

    renderer(<App/>,element);
    const count = element.getElementsByTagName('a').length;
    expect(count).toBe(7);
  })

  test('should have one link in footer comp',()=>{
  
    renderer(<Footer/>,element);
    const count = element.getElementsByTagName('a').length;
    expect(count).toBe(1);
  })
  

  test('should have Submit text in AddContactfromAPI btnRegister',()=>{
    
    renderer(<AddContactfromAPI/>,element);
    expect(screen.getByTestId('btnRegister')).toHaveTextContent('Submit');

  })

  test('contact component should have bootstrap card  class',()=>{
    
    renderer(<Contact/>,element);
    expect(screen.getByTestId('Card')).toHaveClass('card');

  })

  test('hyperlink should have bootstrap nav-link class',()=>{
    
    renderer(<App/>,element);
    const links=element.getElementsByTagName('a');
    for(let i=1;i<links.length-1;i++){
      expect(links[i]).toHaveClass('nav-link');
    }
 

  })
  



 
})