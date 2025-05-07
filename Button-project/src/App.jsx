import Student from './Student.jsx'



function App(){
  return(
  <>
  <Student name="Spongebob" age={30} isStudent={false}/>
  <Student name="Patric" age={24} isStudent={true} ></Student>
  <Student name="Squidward" age={30} isStudent={true}></Student>
  </> 
  );
} 

export default App;