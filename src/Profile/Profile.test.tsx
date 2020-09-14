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
          logoutUser={Function}
          postUserData={Function}
          userData={[]}
          error={''}
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
          logoutUser={mockLogoutUser}
          postUserData={Function}
          userData={[]}
          error={''}
        />
      </MemoryRouter>
    );

    const logoutBtn = getByText('Logout');
    fireEvent.click(logoutBtn)

    expect(mockLogoutUser).toHaveBeenCalledTimes(1);
  });
});
