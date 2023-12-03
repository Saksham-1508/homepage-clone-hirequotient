import './App.css';
import FeatureGrid from './components/FeatureGrid';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbars from './components/Navbars';
import TestimonialGrid from './components/TestimonialGrid';
import Accordion from './components/Accordion';
import PricingGrid from './components/PricingGrid';
import Final from './components/Final';

const testimonials = [
  {
    id: 1,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  {
    id: 4,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  {
    id: 5,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  {
    id: 6,
    quote: "The best time manager app",
    description:"I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
    name: "Brad de Costa",
    title: "Head of Marketing",
    image: "https://framerusercontent.com/images/zZvfJYc3fJqnLKF0fdBBk1r0Q.png",
    rating: 5,
  },
  
];

const faqItems = [
  {
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
  {
    question: 'What happens when my trial ends?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
  {
    question: 'What happens when my trial ends?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
  {
    question: 'What happens when my trial ends?',
    answer: 'You can cancel your plan whenever you’d like. You’ll be downgraded to the free plan. You won’t be locked out of any projects that have paid plans.'
  },
]  

function App() {
  return (
    <div className="App">
        <Navbars/>
        <Home/>
        <FeaturesSection/>
        <FeatureGrid/>
        <TestimonialGrid testimonials={testimonials} />
        <TestimonialGrid testimonials={testimonials} />
        <TestimonialGrid testimonials={testimonials} />
        <PricingGrid/>
        <Accordion items={faqItems} />
        <Final/>
        <Footer/>
    </div>
  );
}

export default App;
