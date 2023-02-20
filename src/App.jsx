import React from "react"

// [JS-0400]; [JS-0093]; [JS-0423]
<Element foo={true} />;

// [JS-0072]; [JS-0093]; [JS-0423]; [JS-0125]; [JS-0424]
{<React.Fragment><Bar /></React.Fragment>}

// [JS-0093]; [JS-0423]; [JS-0125]
<Bar><Bar/></Bar>

// [JS-0455]; [JS-0128]
const HelloWorld = <div class="hello">Hello World</div>;

// [JS-0128]
const Hello = (props) => (
    <div>Hello {props.name}</div>
);

// [JS-0128]
const ContentContainer = <div className="content"></div>;

// doc comment
export function Stuff() {
    return <div>
        {/* [JS-0424] */}
        <>[1,2,3]</>
    </div>
}

export const MoreStuff = <React.Fragment>Should use shorthand fragments!</React.Fragment>
