import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InfoTag from './InfoTag';

describe('InfoTag', () => {
	it("Should display the home icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><InfoTag /></MemoryRouter>
		)
		
		const infoIcon = getByTitle('info tag')

		expect(infoIcon).toBeInTheDocument();
	})
})