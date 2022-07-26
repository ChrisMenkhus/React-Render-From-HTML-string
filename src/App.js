import React from "react";
import "./App.css";
import parse from "html-react-parser";

const html = `
  <div class="App" style="text-align: center;">
    <form action="console.log("submit")" >
    <label for='name'>name</label>
    <input id='name'></input>
    <button type="submit">submit</button>
    </form>
  </div>
`;

const options = {
  replace: (domNode) => {
    console.log(domNode);

    switch (domNode.name) {
      case "form":
        return (
          <form>
            <>{Array.from(domNode.children)}</>

            <p>form test</p>
          </form>
        );
    }

    // if (domNode.attribs) {
    //   switch (domNode.attribs.class) {
    //     case "remove":
    //       return <h4>{domNode.children[0].data}</h4>;
    //     case "button":
    //       return (
    //         <button className={domNode.attribs.class}>
    //           {domNode.children[0].data}
    //         </button>
    //       );
    //     default:
    //       break;
    //   }
    // }
  },
};

export default function App() {
  return parse(html, options);
}
