import {Link} from "react-router-dom";

const scriptData = [
  { title: "Asynchronous Programming" },
  { title: "Prototypal Inheritance" },
  { title: "Scope" },
  { title: "Closures" },
  { title: "Type Coercion" },
  { title: "Memory Management" },
  { title: "Event Handling" },
  { title: "Module System" },
  { title: "Error Handling" },
  { title: "Performance Optimization" }
];




export const Navbar = () => {
  
  return (
    <div className="nav-component">
 <div className="logoimg"><img src="codelogo.png" alt="" /></div>
        
     <h3 className="nav-Link"> <Link to={"/"}>Asynchronous Programming</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component2"}> Prototypal Inheritance</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component3"}> Scope</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component4"}> Closures</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component5"}> Type Coercion</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component6"}> Memory Management</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component7"}> Event Handling</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component8"}> Module System</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component9"}> Error Handling</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component10"}> Performance Optimization</Link></h3>
  
    </div>
  )
}
