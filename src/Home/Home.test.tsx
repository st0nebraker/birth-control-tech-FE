import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from './Home';

describe('Home', () => {
	it("Should display the home image", () => {
		const { getByAltText } = render(
			<MemoryRouter>
				<Home 
					days={[]}
					userDetails={[]}
					username={''}
				/>
			</MemoryRouter>
		)
		
		const imageAltText = getByAltText('Papaya')

		expect(imageAltText).toBeInTheDocument();
	})

	it.skip("Should prompt the user to fill out the profile form and today's temp", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Home 
					days={[]}
					userDetails={[]}
					username={''}
				/>
			</MemoryRouter>
		)
		
		const profileText = getByText('Fill out the profile page to begin.')
		const dailyInputText = getByText('Don\'t forget to log your basal body temp today!')

		expect(profileText).toBeInTheDocument();
		expect(dailyInputText).toBeInTheDocument();
	})
})