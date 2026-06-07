import './App.css';


const App = () => {

  return (
    // TODO: find images for each category
    <div className="Title">
      <h1>Community Board</h1>
      <h2>Welcome to the Community Board!</h2>
      <p>Find volunteering opportunites and make your community a better place to live in.</p>

      <div className="Content">
        <h2>Volunteer Opportunities:</h2>

        <div className="category-section ">
          <h3>Food Bank Assistance: Help sort and distribute food to those in need.</h3>
          <div className="containers">
            <div> <img src="./images/foodpantry1.jpg" alt="Food Bank" className="card-image"/> <a href="https://www.kehilatpantry.org/volunteer" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
            <div> <img src="./images/foodpantry2.jpg" alt="Food Bank" className="card-image"/> <a href="https://www.astoriafoodpantry.com/volunteer-schedule.html" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
            <div> <img src="./images/foodpantry3.jpg" alt="Food Bank" className="card-image"/> <a href="https://www.commonpoint.org/program/digital-food-pantry" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
          </div>

          <div className="category-section">
            <h3>Gardening: Help maintain community gardens and green spaces.</h3>
            <div className="containers">
              <div> <img src="./images/gardening1.jpg" alt="Gardening" className="card-image"/> <a href="https://queensbotanical.org/community-volunteer/" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/gardening2.jpeg" alt="Gardening" className="card-image"/> <a href="https://www.nycgovparks.org/greenthumb/join-a-garden" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/gardening3.jpg" alt="Gardening" className="card-image"/> <a href="https://www.thebattery.org/volunteer/" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
            </div>
          </div>

          <div className="category-section">
            <h3>Tutoring: Provide academic support to students in your community.</h3>
            <div className="containers">
              <div> <img src="./images/tutoring1.webp" alt="Tutoring" className="card-image"/> <a href="https://volunteer.queenslibrary.org/volunteer_opportunities?layoutViewMode=tablet" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/tutoring2.jpeg" alt="Tutoring" className="card-image"/> <a href="https://www.nycservice.org/opportunity/a0T3Z00000QkPdmUAF/reading-partners-volunteer-tutor?layoutViewMode=tablet" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/tutoring3.jpg" alt="Tutoring" className="card-image"/> <a href="https://readingpartners.org/volunteer-in-new-york/" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
            </div>
          </div>

          <div className="category-section ">
            <h3>Senior Care: Spend time with elderly residents and assist with daily activities.</h3>
            <div className="containers">
              <div> <img src="./images/seniorcare1.jpeg" alt="Senior Care" className="card-image"/> <a href="https://www.qchnyc.org/ways-to-give/volunteer" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/seniorcare2.webp" alt="Senior Care" className="card-image"/> <a href="https://portal.311.nyc.gov/article/?kanumber=KA-01685" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
              <div> <img src="./images/seniorcare3.webp" alt="Senior Care" className="card-image"/> <a href="https://www.ozanamhall.org/faith-based-charities-in-bayside-ny/" target="_blank" rel="noreferrer"><button className="button"> Learn More </button></a></div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;