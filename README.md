<img src="https://user-images.githubusercontent.com/59381432/93412198-ef5f4f00-f859-11ea-97d5-74424f9bb4fd.png" width=80px height=80px alt="Lono">
# Lono
[![Build Status](https://travis-ci.org/Birth-control-tech/birth-control-tech-FE.svg?branch=master)](https://travis-ci.org/Birth-control-tech/birth-control-tech-FE)

### Contributors
- Frontend
  * __Becca Steinbrecher__ (GitHub: [b-stein](https://github.com/b-stein))
  * __Alex Sodemann__ (GitHub: [asodemann18](https://github.com/asodemann18))
- Backend ([repo](https://github.com/Birth-control-tech/birth-control-tech-BE))
  - __Madeleine Halle__ (GitHub: [madhalle](https://github.com/madhalle))
  - __Whitney Kidd__ (GitHub: [whitneykidd](https://github.com/whitneykidd))

## Abstract
This is a birth control tool for women to follow the fertility awareness method (natural birth control). 

A user logged in for the first time is prompted to submit the profile form, so the app can start tracking their high risk and low risk days.  Once their profile information has been logged, a user can start tracking their daily basal body temperature along with any symptoms they might be having that day.  After filling out today's entry, a user can then view whether today is a high risk day or not.  The user can also see their historical data through a color coded calendar, or they can view reports that will display their temperature over the past week or month. 

## Learning Goals
* Build a PWA
* Utilize TypeScript and React Hooks
* Implement TravisCI
* Deploy to Heroku

## Setup
View the [deployed application](https://lono-fertility.herokuapp.com/) (For mobile view, open devtools `cmd + opt + j`, then click mobile view).

--OR--

```
$ git clone [file path name]
$ cd birth-control-tech-fe
$ npm install 
$ npm start
```
## In Action
[![Lono demo](https://img.youtube.com/vi/UPBCkB9-NHg/default.jpg)](https://www.youtube.com/watch?v=UPBCkB9-NHg&feature=youtu.be&ab_channel=BJoy)

## Wins
- Connecting a hardware bluetooth piece to our application programmatically
- Incorporating a PWA push notification based off time to the user
- Write a frontend codebase with TypeScript
- Making a very atomic project board from the beginning, and staying on task with our due dates to finish the project on time
- Long, effective pairing hours remotely

## Future Iterations..
- Keep bluetooth thermometer connected, capture data for daily log form
- Predict upcoming high or low risk days
- Put app on PWA store for android consumption
- Enable push notification to open right to the daily log form
- Calculate which of the 4 phases the user is on based off their tracking
- Track symptoms along with these phases, this is helpful for athletic planning or general health awareness/planning

## Technologies Used
- React, React Hooks
- TypeScript
- Jest
- React Testing Library
- HTML/SCSS
- npm
  - react-chartjs-2
  - react-multi-select-component
  - react-responsive-carousel
  - react-calendar
  - momentjs
  
## Systems/Practices
- git/Version Control
- [Wireframe](https://www.figma.com/file/cdMfcy3cP3iIhKzIbQfY5I/LNGP-Wireframe?node-id=0%3A1)
- TravisCI
- Heroku
- [PR Template](https://github.com/Birth-control-tech/birth-control-tech-FE/blob/master/pull_request_template.md)
- [Project Board](https://github.com/orgs/Birth-control-tech/projects/1)
- TDD
