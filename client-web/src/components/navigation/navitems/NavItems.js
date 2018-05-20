import React, { Component, Fragment } from "react";
import NavItem from "./NavItem";
//

const NavItems = props => {
  const navContent = [
    {
      title: "Itineraries",
      link: "#"
    },
    {
      title: "Collaborate",
      link: "#"
    },
    {
      title: "Save$",
      link: "#"
    }
  ];
  const renderNavItems = (item, key) => {
    return (
      <NavItem item={item} key={key} isSmallScreen={props.isSmallScreen} />
    );
  };
  const navItems = navContent.map(renderNavItems);
  return <Fragment>{navItems}</Fragment>;
};

export default NavItems;
