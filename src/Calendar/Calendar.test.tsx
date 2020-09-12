import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Calendar from './Calendar';

describe('Calendar', () => {
  it('should display a title and a calendar', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Calendar />
      </MemoryRouter>
    );

    const title = getByText('Calendar');
    const dayOfWeek = getByText('Mon');
    const dayNum = getByText('12');
    
    expect(title).toBeInTheDocument();
    expect(dayOfWeek).toBeInTheDocument();
    expect(dayNum).toBeInTheDocument();
  });
});