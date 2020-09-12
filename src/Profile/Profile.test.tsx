import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from './Profile';

describe('ProfileForm', () => {
  it('should display Profile title and logout button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Profile 
          lastOvulation={''}
          duration={0}
          averageCycle={0}
          logoutUser={Function}
        />
      </MemoryRouter>
    );

    const title = getByText('Profile');
    const logoutBtn = getByText('Logout');
    
    expect(title).toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });

  it('should logout a user if button is clicked', () => {
    const mockLogoutUser = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <Profile 
          lastOvulation={''}
          duration={0}
          averageCycle={0}
          logoutUser={mockLogoutUser}
        />
      </MemoryRouter>
    );

    const logoutBtn = getByText('Logout');
    fireEvent.click(logoutBtn)

    expect(mockLogoutUser).toHaveBeenCalledTimes(1);
  });
});
