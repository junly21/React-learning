import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function App() {
  return (
    <div>
      ToDo 시작
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
