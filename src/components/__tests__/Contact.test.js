import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//Grouping test cases by describe
describe("Contact us page test cases", () => { 
    //test => it (you can write)
    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole('heading');
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact component", () => {
        render(<Contact />);
    
        //Querying
        const button = screen.getByText('submit');
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Shoud load placehoder text inside contact component", () => {
        render(<Contact />);
    
        const placeholder = screen.getByPlaceholderText('name');
    
        expect(placeholder).toBeInTheDocument();
    });
    
    test ("Should load 2 input boxes on contact component", () => {
        //Render
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole('textbox');
        //Assertion
        expect(inputBoxes.length).toBe(3);
    });
});

