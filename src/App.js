
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import PreventCompFromRendering from "./components/PreventCompFromRendering";
import LoginControl from "./components/LoginControl";
import Lists from "./components/Lists"
import Blog from "./components/Blog"
import Forms from "./components/Forms";
import { Title } from "./components/Title";
import TemperatureCalculator from "./components/TemperatureCalculator";
import CompositionAndProps from "./components/CompositionAndProps";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Components,Props,State & Lifecycle in React"/>
        <TodoList name="Hello world"/>
        <Clock />
        <Todo /> 
        <Title title="Event Handling in React"/>
        <Toggle />
        <Title title="Conditional Rendering"/>
        <PreventCompFromRendering/>
        <LoginControl/>
        <Title title="List & Key and Map in React"/>
        <Lists numbers={[1, 2, 3, 4, 5]}/>
        <Blog posts={[
                  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
                ]} />
        <Forms/>
        <Title title="Lifting State Up"/>
        <TemperatureCalculator/>
        <Title title="Composition and Props"/>
        <CompositionAndProps/>
      </header>
    </div>
  );
}

export default App;
