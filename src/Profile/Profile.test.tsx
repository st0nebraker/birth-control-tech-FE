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
          username={''}
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
          username={''}
          error={''}
        />
      </MemoryRouter>
    );

    const logoutBtn = getByText('Logout');
    fireEvent.click(logoutBtn)

    expect(mockLogoutUser).toHaveBeenCalledTimes(1);
  });

  it('should display a form if it\'s a new user', () => {
    const mockLogoutUser = jest.fn();
    const mockUserPost = jest.fn();

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Profile 
          logoutUser={mockLogoutUser}
          postUserData={mockUserPost}
          userData={[
            { 
              start_date: '09/01/2020',
              avg_period: 7,
              avg_cycle: 28,
              name: 'Alex'
            }
          ]}
          username={'Test'}
          error={''}
        />
      </MemoryRouter>
    );

    const lastOvulation = getByText('First Day of Last Period:');
    const submit = getByRole('button', {name: 'Submit'});

    expect(lastOvulation).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  it('should display a user\'s info if they are a returning user', () => {
    const mockLogoutUser = jest.fn();
    const mockUserPost = jest.fn();

    const { queryByText, queryByRole, getByText } = render(
      <MemoryRouter>
        <Profile 
          logoutUser={mockLogoutUser}
          postUserData={mockUserPost}
          userData={[
            { 
              start_date: '09/01/2020',
              avg_period: 7,
              avg_cycle: 28,
              name: 'Alex'
            }
          ]}
          username={'Alex'}
          error={''}
        />
      </MemoryRouter>
    );

    const lastOvulation = getByText(/Last Ovulation:/)
    const duration = getByText(/Duration:/)
    const avgLength = getByText(/Average Cycle Length:/)

    const lastOvulationInput = queryByText('First Day of Last Period:');
    const submit = queryByRole('button', {name: 'Submit'});

    expect(lastOvulation).toBeInTheDocument();
    expect(duration).toBeInTheDocument();
    expect(avgLength).toBeInTheDocument();
    expect(lastOvulationInput).not.toBeInTheDocument();
    expect(submit).not.toBeInTheDocument();
  });
});
