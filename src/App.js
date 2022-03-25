import SoundCard from './components/sound-card/SoundCard';
import AppLayout from './components/appLayout/AppLayout';
import data from './sounds.json';
import { useState } from 'react';

const App = (props) => {
  const [sounds] = useState(data);
  return (
    <AppLayout>
      <section className="main-content">
        {sounds.map((sound) => (
          <div key={sound.title} className="card-wrapper">
            <SoundCard title={sound.title} url={sound.url} />
          </div>
        ))}
      </section>
    </AppLayout>
  );
};

export default App;
