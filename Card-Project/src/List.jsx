

function List(){
    const fruits = [{id: 1, name: "apple", calories:78}, 
                    {id: 2, name: "orange", calories: 55}, 
                    {id: 3, name: "coconut", calories: 800}, 
                    {id: 4, name: "pinapple", calories: 700}
                ];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERIC ORDER
    //fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC ORDER
    
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100); // Memunculkan kalori yang kurang dari 100
    // const hightCalFruit = fruits.filter(fruit => fruit.calories >= 100); //

    const listItems = fruits.map(fruit=> <li key={fruit.id}>                                        
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b>
                                                </li>)

    return(<ol>{listItems}</ol>)
}

export default List