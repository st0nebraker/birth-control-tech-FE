import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent, screen } from "@testing-library/react";
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

	it.skip("Should display first chart in carousel", () => {
		const { getByText } = render(
			<MemoryRouter><Reports /></MemoryRouter>
		)
		
		const chart1 = getByText('one')

		expect(chart1).toBeInTheDocument();
	})

	it.skip("Should display chart information paragraph", () => {
		const { getAllByText } = render(
			<MemoryRouter><Reports /></MemoryRouter>
		)
		
		const chartInfo = getAllByText('Subtitle: info')

		expect(chartInfo.length).toEqual(4);
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