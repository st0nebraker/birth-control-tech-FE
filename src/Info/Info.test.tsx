import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Info from './Info';

describe('Info', () => {
	it("Should display info paragraph", () => {
		const { getByText } = render(
			<MemoryRouter><Info /></MemoryRouter>
		)
		
		const infoParagraph = getByText(/For best results, take your temperature at the same time first thing every morning. After 3 cycles, enough data is collected for reliable predictions./)

		expect(infoParagraph).toBeInTheDocument();
	})

	it("Should display second info paragraph", () => {
		const { getByText } = render(
			<MemoryRouter><Info /></MemoryRouter>
		)

		const infoParagraph = getByText(/Lono makes use of the Fertility Awareness Methods also called Natural Birth Control. By tracking your basal body temperature each morning, high risk and low risk fertility days can be calculated with a 99.6% effectiveness rate./)

		expect(infoParagraph).toBeInTheDocument();
	})

	it("Should display third info paragraph", () => {
		const { getByText } = render(
			<MemoryRouter><Info /></MemoryRouter>
		)

		const infoParagraph = getByText(/Lono is not liable if one does fall pregnant. Please consult your personal doctor for ultimate assurance./)

		expect(infoParagraph).toBeInTheDocument();
	})
})