import React, { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <>
      <h1>
        Book{id}
        {obj.hello}
      </h1>
    </>
  );
};

export default Book;
// to render multiple book with ten diff id
// use params hooks it takes no parameter you need to call it just its going to return an object that has all the custom para meters wd defined in the router  here we defined the parameter called id  that will return key of an id and the value of an id
