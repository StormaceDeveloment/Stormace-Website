import './App.css'
import Hero from './components/Hero'
// import About from './components/About'
// import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

declare module './components/Hero';
// declare module './components/About';
// declare module './components/Services';
// declare module './components/Portfolio';
// declare module './components/Contact';
// declare module './components/Footer';

function App() {
  return (
      <div className="font-sans">
        <div className="bg-gray-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-8">Stormace Website</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Hero />
              {/* <About />
              <Services />
              <Portfolio />
              <Contact />
              <Footer /> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
