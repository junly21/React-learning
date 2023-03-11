const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox"></input>
      <span>예시 텍스트</span>
      <button>삭제</button>
    </div>
  );
};

const Todos = ({
  input, //인풋에 입력되는 텍스트
  todos, // 할 일 저장된 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}></form>
      <input />
      <button type="submit">등록</button>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
