// JS-0400
<Element foo={true} />;

// JS-0410
{<React.Fragment><Bar /></React.Fragment>}

// JS-0425: react/jsx-one-expression-per-line
<Bar><Hello /></Bar>

// "react/no-unknown-property": "JS-0455",
var HelloWorld = <div class="hello">Hello World</div>;

// JS-0430
<App
    a={true}
    z
    r
    _onClick={function(){}}
    onHandle={function(){}}
    {...this.props}
    b={false}
    {...otherProps}
>
    {test}
</App>

// JS-0461
const Hello = (props: {-name: string}) => (
    <div>Hello {props.name}</div>
);

// JS-0468
var contentContainer = <div className="content"></div>;