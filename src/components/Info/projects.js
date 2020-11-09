import employeeGirGif from '../Gifs/employee-example.gif';
import budgetTrackerGif from '../Gifs/budget-tracker.gif';
import fitnessTrackerGif from '../Gifs/fitness-Tracker.gif';

const projects = [
    {
        "id": 1,
        "projectName": "Employee Directory ",
        "exampleGif": employeeGirGif,
        "summary": "For this project, I have created an employee directory with React. I have broken down the application's UI into components, managed component state, and it responds to user events. The user can search employees by last name, or sort the table of employees by first name, last name, or birth date.",
        "githubLink": "https://github.com/Shahmir22/employee-directory-react",
        "deployedLink": "https://shahmir22.github.io/employee-directory-react/"
    },
    {
        "id": 2,
        "projectName": "Budget Tracker",
        "exampleGif": budgetTrackerGif,
        "summary": "In this application, I have added functionality to an existing Budget Tracker application to allow for offline access and functionality. The user is be able to add expenses and deposits to their budget with or without an internet connection. When entering transactions offline, they are saved and populate the total when brought back online.",
        "githubLink": "https://github.com/Shahmir22/budget-tracker",
        "deployedLink": " https://budget-tracker-shah.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Workout",
        "exampleGif": fitnessTrackerGif,
        "summary": "In this application, I have created a workout tracker. I was already provided with the front end code in the Public folder. In order to complete the backend code, I created a Mongo database with a Mongoose schema and handle routes with Express.",
        "githubLink": "https://github.com/Shahmir22/Workout-Tracker",
        "deployedLink": "https://workout-tacker2.herokuapp.com/"
    }
];

export default projects;