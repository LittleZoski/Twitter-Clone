import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className='nav'>
    <nav>
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/listings">Listings</Link>
    </nav>
    </div>
  )
}

export default Navbar;
