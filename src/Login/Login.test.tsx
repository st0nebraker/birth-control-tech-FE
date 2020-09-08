import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from './Login';

describe('Login', () => {
	it("Should display app logo", () => {
		const { getByTitle } = render(
			<MemoryRouter>
				<Login           
					username={'Temp Name'}
					setUsername={Function}
					loggedIn={false}
					setLoggedIn={Function}
				/>
			</MemoryRouter>
		)
		
		const logo = getByTitle('logo')

		expect(logo).toBeInTheDocument();
	})

	it("Should display name input", () => {
		const { getByText } = render(
			<MemoryRouter>
				<Login           
					username={'Temp Name'}
					setUsername={Function}
					loggedIn={false}
					setLoggedIn={Function}
				/>
			</MemoryRouter>
		)
		
		const nameInput = getByText('Name:')

		expect(nameInput).toBeInTheDocument();
	})

	it("Should display login button", () => {
		const { debug } = render(
			<MemoryRouter>
				<Login           
					username={'Temp Name'}
					setUsername={Function}
					loggedIn={false}
					setLoggedIn={Function}
				/>
			</MemoryRouter>
		)
		
		const loginBtn = screen.getByRole('button')

		expect(loginBtn).toBeInTheDocument();
		expect(loginBtn).toHaveTextContent('LOGIN');
	})
})