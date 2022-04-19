import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import "./App.css";

function AnimatedLogo() {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? -my : 0, immediate: down });
  });

  // Bind it to a component
  return (
    <div className="scene">
      <animated.div className="cube" {...bind()} style={{ rotateY: x, rotateX: y }}>
          <div className="cube__face cube__face--front">front</div>
          <div className="cube__face cube__face--back">back</div>
          <div className="cube__face cube__face--right">right</div>
          <div className="cube__face cube__face--left">left</div>
          <div className="cube__face cube__face--top">top</div>
          <div className="cube__face cube__face--bottom">bottom</div>
      </animated.div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnimatedLogo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
