import React, { useState, useEffect } from 'react';
import data from './data';
import SliderComponent from './SliderComponent';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <SliderComponent
        people={people}
        index={index}
        onClickPrev={handlePrev}
        onClickNext={handleNext}
      />
    </section>
  );
}

export default App;
