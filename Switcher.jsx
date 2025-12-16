import { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

return <div>
  {sw ? (<span>Dark</span>) : (<span>Light</span>) }

  <br />

  <input type="text" placeholder="Hello" key={sw? "dark" : "light"}/>
  <button onClick={() => setSw(!sw)}>Toggle</button>
</div>;
};

export default Switcher;