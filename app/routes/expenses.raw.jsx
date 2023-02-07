const DUMMY =[ {
    id: "e1",
    title: "first expenses",
    amount: 12.99,
    date: new Date().toISOString()
    
},
{
    id: "e2",
    title: "second expenses",
    amount: 134.99,
    date: new Date().toISOString()
    
}];

export function loader() {
    return DUMMY
}