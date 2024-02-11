"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink item={link} key={link.title} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        onClick={() => setOpen((prev) => !prev)}
        src="/menu.png"
        alt="menu"
        width={24}
        height={24}
        className={styles.menuIcon}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLink item={link} key={link.title} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
