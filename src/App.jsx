import { useState } from 'react';
import './circuit.css';
import Challenges from './components/Challenges';
import Footer from './components/Footer';
import Header from './components/Header';
import Ranking from './components/Ranking';
import Welcome from './components/Welcome';

function App() {
  const [rankingData] = useState([
    { id: 1, name: 'Alex Chen', challenges: 87, successRate: '94%', points: 12456 },
    { id: 2, name: 'Maria Rodriguez', challenges: 76, successRate: '91%', points: 11872 },
    { id: 3, name: 'David Kim', challenges: 92, successRate: '88%', points: 10945 },
    { id: 4, name: 'Sarah Johnson', challenges: 65, successRate: '93%', points: 9876 },
    { id: 5, name: 'James Wilson', challenges: 71, successRate: '89%', points: 9234 }
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-6">
          <Welcome />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-7">
              <Challenges />
            </div>
            <div className="lg:col-span-5">
              <Ranking rankingData={rankingData} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
