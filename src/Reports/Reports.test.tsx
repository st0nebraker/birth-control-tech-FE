import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import 'jest-canvas-mock';
import Reports from './Reports';


describe('Reports', () => {
	it("Should display reports title", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Reports 
					days={[]}
				/>
			</MemoryRouter>
		)
		
		const title = getByText('Reports')

		expect(title).toBeInTheDocument();
	})

	it("should have two charts", () => {
		const { getAllByTestId } = render(
			<MemoryRouter><Reports days={[]} /></MemoryRouter>
		)
		
		const charts = getAllByTestId('chart')

		expect(charts.length).toEqual(2);
	})

	it("Should have 6 buttons", () => {
		const { debug } = render(
			<MemoryRouter>
			<Reports 
				days={[]}
			/>
			</MemoryRouter>
		)

		const charts = screen.getAllByRole('button')

		expect(charts[0]).toHaveAttribute('aria-label');
		expect(charts.length).toEqual(4);
	})
})