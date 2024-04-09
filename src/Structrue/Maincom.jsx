
import { Mainbox } from "./Mainbox"
import { Topnav } from "./Topnav"


export const Maincom = (prop) => {
  return (
    <div className="Main-box">
      <Topnav title={prop.title}  />
      <Mainbox/>
    </div>
  )
}
