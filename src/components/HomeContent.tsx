import { useState } from 'react';
import Style from './HomeContent.module.css'
import BasicForm from './BasicForm';
import AdvancedForm from './AdvancedForm';

function HomeContent() {
    const [view, setView] = useState("basic");

  return (
    <>
      <img
          src="/assets/homepage.jpg"
          alt="Homepage image"
          height="919px"
        />

      <nav className={Style.tabs}>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "rgb(127, 63, 146)" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "rgb(127, 63, 146)" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}

      <br />
      <br />
    </>
  )
}

export default HomeContent
