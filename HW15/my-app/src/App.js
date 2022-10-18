import './App.css';
import { Post } from './post';
import { ANAKIN_IMAGE } from './constants';
import { RAY_IMAGE } from './constants';


function App() {
  return (
    <div className="App">
      <Post author={{
            name: "Anakin Skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader"
         }}
         content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
         image={RAY_IMAGE}
         date={"26 feb."}
      />
    </div>
  );
}

export default App;
