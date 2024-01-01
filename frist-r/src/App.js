// import logo from './logo.svg';
// import './App.css';
// import Add from"./components/add";
// import  Greetings from"./components/greetings";
// const Person =(props) =>{
//   return(
//     <>
//     <h1>name: {props.name} </h1>
//     <h1>last: {props.ln}</h1>
//     <h1>age:18</h1>
//     </>
//   )
// }

// const App=()=>{
//   // const name = "ansh";
//   // const ist = true;
//   // const str="<></>"
//   return (
//     <div className="App">
//             <Person name={"babu"} ln={"progammer"}/>
//             <Person name="ffds" ln="dsfsd"/>
//             <Person/>
//             <Person/>
//       {/* <h1>hello {ist ? name :'error'}</h1>
//     {name ?(
//       <>
//       <h1>the name is present</h1>
//       <h1>the {str} is use to one or maoe element in a statement</h1>
//       </>
//     ) :(
//       <>
//       <h1> the name is null</h1></>
//     )} */}

//     </div>
//   );
// }
// export default App;

const User=({name,age,hobbies,children})=>{
  return (
  <section>
  <h1>name:{name}</h1>
  <h1>age:{age}</h1>
  <h1>hobbies:{hobbies}</h1>
   {children}
  </section>
);
};
// const User=(props)=>{
//   return (
//   <section>
//   <h1>name:{props.name}</h1>
//   <h1>age:{props.age}</h1>
//   <h1>hobbies:{props.hobbies}</h1>
//   </section>
// );
// };


function App(){
  // // const myname="ansh raj"
  // // //fuction
  // // const multiply=(a,b)=>a*b;

  // //list and array
  // const userinfo=[
  //   {
  //     username:"ansh",
  //     email:"anshraj@gmail.com",
  //     location:"India",
  //   },

  //   {
  //     username:"amith",
  //     email:"amith@gmail.com",
  //     location:"India",
  //   }
  // ]
  return (
//     <form>
//       <h1> hello input your name </h1>
//       const a=<input type="text" placeholder="enter your name"/> 
//       <p>
//         kljkl
// jkl      </p>
//     </form>
    // <h1 className="name">className</h1>
    // <form>
    //   <label htmlFor="name">Name</label>
    //   <input type="text" id="name"></input>
    // </form>
    // <section>
    //   <Add></Add>
    //   <Greetings></Greetings>
    // </section>
    // <>
    // <p>
    //   i am {myname} </p>
    // <p> 2*2={2*2} </p> 
    // <p>my friend {["ansh " , "jeevan "]}</p>
    // <p>my fuction 5*5={multiply(5,5)}</p>
    // //the class name is store in varable at^^^^ the class name is ansh raj 
    // <p className={myname}></p>
    // </>

  // <>
  // {userinfo.map((user)=>(
  //   // the key element is very important in ul|
  //   <ul key={Math.random()*10}>
  //     <li>{user.username}</li>
  //     <li>{user.email}</li>
  //     <li>{user.location}</li>
  //   </ul>
  // ))}
  // </>
  <>
   <User>
      name="ansh"
      age={18}
      hobbies={["coding","@reding"]}
      <h1>
        i am children 
      </h1>
    </User>
  </>
  )
}
export default App;