// doc comment
function Component() {
  return <>Something Something JSX</> 
}

export default function App() {
  return <div>
    <Component className="some-class"/>
    <>bad jsx fragment</>
  </div>
}

