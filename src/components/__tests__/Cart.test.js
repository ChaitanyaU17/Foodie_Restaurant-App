import { act } from "react"
import { render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";

// global.fetch = jest.fn(() => 
//     Promise.resolve({
//         jason: () => Promise.resolve(MOCK_DATA),
//     })
// );


// it("should load Restaurant Menu component", async() => {
//     await act(async() => render(<RestaurantMenu />));
// })