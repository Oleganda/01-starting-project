import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';



function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);

  }
  let moreInfo = <p>Please Select Topic</p>;
  if (selectedTopic) {

    moreInfo = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].titles}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>

      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>

    </div>

  }


  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>

          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conseptItem) => (
              <CoreConcept key={conseptItem.title} {...conseptItem} />))}

          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX </TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {moreInfo}

        </section>
      </main>
    </div>
  );
}

export default App;
