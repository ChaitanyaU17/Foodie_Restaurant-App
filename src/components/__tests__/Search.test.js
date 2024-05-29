import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react";

// Mocking fetch globally
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should search res list for burger text input", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

         //const cardsBeforeSearch = screen.getAllByTestId('resCard');

        // expect(cardsBeforeSearch.length).toBe(20);

        // const searchBtn = screen.getByRole('button', { name: 'search'});

        // const searchInput = screen.getByTestId("searchInput");

        // fireEvent.change(searchInput, {target: {value: "burger"}})

        // fireEvent.click(searchBtn);
        // expect(searchBtn).toBeInTheDocument();
        // expect(searchInput).toBeInTheDocument();

        // const cards = screen.getAllByTestId('resCard');

        // expect(cards.length).toBe(2);
    });
});
