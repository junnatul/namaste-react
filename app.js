// const heading = React.createElement ('h1', {id:"heading"}, 'Hello World From React!');
// const root = ReactDOM.createRoot (document.getElementById ('root'));
// root.render (heading);

const parent = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:'child1'},[
        React.createElement("h1",{},'This is the 1st child'),
        React.createElement("h2",{},'This is the 2nd child')
    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("h1",{},'This is the 1st child'),
        React.createElement("h2",{},'This is the 2nd child')
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);