import { useEffect, useRef, useState } from 'react';

const useAudio = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const ref = useRef();

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) ref.current?.play();
    else ref.current?.pause();
  }, [playing]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  return {
    ref,
    toggle,
    playing,
    setVolume: (value) => {
      setVolume(value / 100);
    },
  };
};

export default useAudio;
