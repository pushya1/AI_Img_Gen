import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>AI Image Gen</div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/info">&#x1F6C8;</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
