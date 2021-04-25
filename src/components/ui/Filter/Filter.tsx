import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './Filter.scss';

function Filter() {
  return (
    <div className="filter">
      <div className="filter-wrapper">
        <input className="filter-input" type="text" placeholder="Type a name to search..." />
        <Button onClick={() => console.log('filter click')} className="filter-button">
          <Icon className="filter-button-icon" icon="search"/>
        </Button>
      </div>
    </div>
  );
}

export default Filter;
