import List from './List.jsx'

function App() {

  const fruits = [{id: 1, name: "apple", calories: 100},
    {id: 5, name: "banana", calories: 200}, 
    {id: 2, name: "orange", calories: 55}, 
    {id: 3, name: "coconut", calories: 800}, 
    {id: 4, name: "pinapple", calories: 700}
];

const vegetables = [{id: 3, name: "potatoes", calories:78}, 
                    {id: 6, name: "celery", calories: 55}, 
                    {id: 7, name: "carrots", calories: 800}, 
                    {id: 8, name: "broccoly", calories: 700}
];

  return(
    <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
    

  );
    
}

export default App
