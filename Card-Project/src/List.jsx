import PropTypes from 'prop-types';

function List(props){
    
    const category = props.category;
    const itemList = props.items;

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERIC ORDER
    //fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC ORDER
    
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); // Memunculkan kalori yang kurang dari 100
    // const hightCalFruit = fruits.filter(fruit => fruit.calories >= 100); //

    const listItems = itemList.map(item=> <li key={item.id}>                                        
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                                </li>)

    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-item">{listItems}</ol>
    </>)
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ),
};

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List