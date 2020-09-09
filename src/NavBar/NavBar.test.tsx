import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from './NavBar';

describe('NavBar', () => {
	it("Should display the home icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><NavBar /></MemoryRouter>
		)
		
		const homeIcon = getByTitle('home')

		expect(homeIcon).toBeInTheDocument();
	})

	it("Should display the calendar icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><NavBar /></MemoryRouter>
		)
		
		const calendarIcon = getByTitle('calendar')

		expect(calendarIcon).toBeInTheDocument();
	})

	it("Should display the new entry icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><NavBar /></MemoryRouter>
		)
		
		const newEntryIcon = getByTitle('new entry')

		expect(newEntryIcon).toBeInTheDocument();
	})

	it("Should display the reports icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><NavBar /></MemoryRouter>
		)
		
		const reportsIcon = getByTitle('reports')

		expect(reportsIcon).toBeInTheDocument();
	})

	it("Should display the profile icon", () => {
		const { getByTitle } = render(
			<MemoryRouter><NavBar /></MemoryRouter>
		)
		
		const profileIcon = getByTitle('profile')

		expect(profileIcon).toBeInTheDocument();
	})
})