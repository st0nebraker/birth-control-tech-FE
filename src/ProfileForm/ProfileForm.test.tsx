import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileForm from './ProfileForm';

describe('ProfileForm', () => {
  it('should display 3 input fields and a submit button', () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ProfileForm 
          postUserData={Function}
          username={''}
        />
      </MemoryRouter>
    );

    const lastOvulation = getByText('First Day of Last Period:');
    const AvgCycleLength = getByText('Average Cycle Length:');
    const AvgPeriodLength = getByText('Average Period Length:');
    const lastOvulationPlaceholder = getByPlaceholderText('mm/dd/yyyy');
    const AvgCycleLengthPlaceholder = getByPlaceholderText('28 Days');
    const AvgPeriodLengthPlaceholder = getByPlaceholderText('7 Days');
    const submit = getByText('Submit');
    
    expect(lastOvulation).toBeInTheDocument();
    expect(AvgCycleLength).toBeInTheDocument();
    expect(AvgPeriodLength).toBeInTheDocument();
    expect(lastOvulationPlaceholder).toBeInTheDocument();
    expect(AvgCycleLengthPlaceholder).toBeInTheDocument();
    expect(AvgPeriodLengthPlaceholder).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it('should allow a user to input information', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <ProfileForm 
            postUserData={Function}
            username={''}
        />
      </MemoryRouter>
    );

    const lastOvulationInput = getByTestId('date');
    const AvgCycleLengthInput = getByPlaceholderText('28 Days');
    const AvgPeriodLengthInput = getByPlaceholderText('7 Days');

    // fireEvent.change(lastOvulationInput, {target: {value: '2020-09-01'}});
    fireEvent.change(lastOvulationInput, {target: {value: '09/01/2020'}});
    fireEvent.change(AvgCycleLengthInput, {target: {value: 21}});
    fireEvent.change(AvgPeriodLengthInput, {target: {value: 5}});
    
    // expect(lastOvulationInput).toHaveValue('2020-09-01');
    expect(lastOvulationInput).toHaveValue('2020-09-01');
    expect(AvgCycleLengthInput).toHaveValue(21);
    expect(AvgPeriodLengthInput).toHaveValue(5);
  });
});