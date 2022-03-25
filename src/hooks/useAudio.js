import { useEffect, useRef, useState } from 'react';

const useAudio = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef();

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      ref.current?.play();
      return;
    }

    ref.current?.pause();
  }, [playing]);

  return { ref, toggle, playing };
};

export default useAudio;
