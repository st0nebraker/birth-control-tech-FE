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
		
		const infoParagraph = getByText('Let\'s Not Get Pregnant makes use of the Fertility Awareness Methods also called Natural Birth Control. By tracking your basal body temperature each morning, high risk and low risk fertility days can be calculated with a 99.6% effectiveness rate.')

		expect(infoParagraph).toBeInTheDocument();
	})

	it("Should display second info paragraph", () => {
		const { getByText } = render(
			<MemoryRouter><Info /></MemoryRouter>
		)
		
		const infoParagraph = getByText('Let\'s Not Get Pregnant is not liable if one does fall pregnant. Please consult your personal doctor for ultimate assurance.')

		expect(infoParagraph).toBeInTheDocument();
	})
})