import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../cart/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    //const loginButton = screen.getByRole('button');
    //or
    //const loginButton = sreen.getByText('Login');
    const loginButton = screen.getByRole('button', { name : "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', { name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});

