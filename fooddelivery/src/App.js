import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header glass-header">
        <h1 className="app-title">Foodie Express 🍕</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for restaurants or dishes..."
        />
      </header>

      {/* Restaurant Section */}
      <main className="restaurant-section">
        <h2 className="section-title">Popular Restaurants</h2>
        <div className="restaurant-list">
          <div className="restaurant-card">
            <img src="https://source.unsplash.com/400x250/?burger" alt="Burger Palace" />
            <h3>Burger Palace</h3>
            <p>Fast Food • 30 min • ★ 4.5</p>
          </div>
          <div className="restaurant-card">
            <img src="https://source.unsplash.com/400x250/?pizza" alt="Pizza Hub" />
            <h3>Pizza Hub</h3>
            <p>Italian • 25 min • ★ 4.7</p>
          </div>
          <div className="restaurant-card">
            <img src="https://source.unsplash.com/400x250/?sushi" alt="Sushi House" />
            <h3>Sushi House</h3>
            <p>Japanese • 20 min • ★ 4.6</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Made by <strong>MSK</strong> 👻</p>
      </footer>
    </div>
  );
}

export default App;
