const heading = React.createElement("div", { id: "Parent" },
     React.createElement("div", { id: "child" }, 
        [React.createElement("h1", { id: "heading" }, "This is heading1"), 
         React.createElement("h2", { id: "heading2" }, "This is heading2")]));

const root = ReactDom.createRoot(document.getElementById("root"));

root.Render(heading);