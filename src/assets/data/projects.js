import { v4 as uuidv4 } from 'uuid';
import WorkoutTrackerImg from '../img/Fitness-Tracker.png';
import TechBlogImg from '../img/Tech-Blog.png';
import EmployeeTrackerImg from '../img/employeeTracker.png';
import PokemonDeckBuilderImg from '../img/pokemon-deck-builder.png';
import NoteTakerImg from '../img/note-taker.png';


const projects = [{
        id: uuidv4(),
        name: 'Workout Tracker',
        desc: 'An application to view, create and track your daily workouts.',
        img: WorkoutTrackerImg,
    },
    {
        id: uuidv4(),
        name: 'Tech Blog',
        desc: 'An CMS-style blog application to publish articles, blog posts, and thoughts and opinions.',
        img: TechBlogImg,
    },
    {
        id: uuidv4(),
        name: 'Employee Tracker',
        desc: 'Using this app you can view and manage departments, roles, and employees in your company.',
        img: EmployeeTrackerImg,
    },
    {
        id: uuidv4(),
        name: 'Pokemon Deck Builder',
        desc: 'A application to look up and trade pokemon cards with your friends.',
        img: PokemonDeckBuilderImg,
    },
    {
        id: uuidv4(),
        name: 'Note Taker',
        desc: 'A note-taking application to write and save text in a list.',
        img: NoteTakerImg,
    },
];

export default projects;