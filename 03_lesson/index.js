// Challenge: find out what happens if we try to append JSX
// to our div#root using .append() instead of ReactDOM

// 1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
// 2. Select the div with the ID of "root" and use `.append()` to append
//    your JSX
// 3. See if you can guess what will show up in the browser before running
//    the code
// 4. See if you can explain what actually shows up in the browser

const root = document.getElementById("root");

const navbar = (
  <nav className="navbar">
    <h1>Mountain Bike store</h1>
    <ul>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
);

// root.append(JSON.stringify(navbar));
ReactDOM.render(navbar, document.getElementById("root"));
