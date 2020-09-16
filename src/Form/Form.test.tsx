import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Form from './Form';

describe('Form', () => {
	it("Should display time input", () => {
		const { getByText } = render(
			<MemoryRouter><Form days={[]} getUserDays={Function} userDetails={[]} username={'Fran'} /></MemoryRouter>
		)

		const inputTime = getByText('Time:')

		expect(inputTime).toBeInTheDocument();
	})

	it("Should display temperature input", () => {
		const { getByText } = render(
			<MemoryRouter><Form days={[]} getUserDays={Function} userDetails={[]} username={'Fran'} /></MemoryRouter>
		)

		const tempInput = getByText('Temp:')

		expect(tempInput).toBeInTheDocument();
	})

	it("Should display symptoms dropdown menu", () => {
		const { getByText } = render(
			<MemoryRouter><Form days={[]} getUserDays={Function} userDetails={[]} username={'Fran'} /></MemoryRouter>
		)

		const symptomInput = getByText('Symptoms:')

		expect(symptomInput).toBeInTheDocument();
	})

	it("Should display submit button", () => {
		const { getByText } = render(
			<MemoryRouter><Form days={[]} getUserDays={Function} userDetails={[]} username={'Fran'} /></MemoryRouter>
		)

		const submitBtn = getByText('SUBMIT')

		expect(submitBtn).toBeInTheDocument();
	})
})