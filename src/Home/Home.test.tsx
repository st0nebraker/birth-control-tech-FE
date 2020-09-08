import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from './Home';

describe('Home', () => {
	it("Should display the home image", () => {
		const { getByAltText } = render(
			<MemoryRouter><Home /></MemoryRouter>
		)
		
		const imageAltText = getByAltText('Papaya')

		expect(imageAltText).toBeInTheDocument();
	})

	it("Should display the risk level for today", () => {
		const { getByText } = render(
			<MemoryRouter><Home /></MemoryRouter>
		)
		
		const imageAltText = getByText('Today is a LOW-RISK day')

		expect(imageAltText).toBeInTheDocument();
	})
})