import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todoing, onRemove, onToggle }) => {
  const { id, text, checked } = todoing;

  const remove = () => {
    onRemove(id);
  };
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={remove}>
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </div>
    </div>
  );
};

export default TodoListItem;
