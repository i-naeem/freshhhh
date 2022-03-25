import AppLayout from './components/appLayout/AppLayout';
import SoundCard from './components/sound-card/SoundCard';

const App = (props) => {
  return (
    <AppLayout>
      <section className="main-content">
        <SoundCard />
      </section>
    </AppLayout>
  );
};

export default App;
