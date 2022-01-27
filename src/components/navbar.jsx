import React, { Component } from "react";
import { Badge } from "react-bootstrap";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <div>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          Inventory{" "}
          <Badge pill bg="secondary">
            {totalCounters}
          </Badge>
        </a>
      </nav>
    </div>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-light">
//           <a className="navbar-brand" href="#">
//             Inventory{" "}
//             <Badge pill bg="secondary">
//               {this.props.totalCounters}
//             </Badge>
//           </a>
//         </nav>
//       </div>
//     );
//   }
// }

export default NavBar;
