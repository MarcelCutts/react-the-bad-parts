// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image,
  Appear,
  CodePane,
  Magic
} from "spectacle";

import styled from "react-emotion";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#20232a",
    secondary: "white",
    tertiary: "#61dafb",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const TwitterBlock = styled("span")`
  display: flex;
  justify-content: center;
`;

const BlueHighlightBlock = styled("span")`
  color: #61dafb;
`;

const images = {
  splash: require("./assets/images/splash.jpg"),
  twitter: require("./assets/images/twitter.png"),
  stateOfJs: require("./assets/images/stateofjs.png"),
  rocket: require("./assets/images/rocket.jpg"),
  devops: require("./assets/images/devops.png"),
  beerBindThis: require("./assets/images/beerbindthis.png"),
  installJsCodeShift: require("./assets/images/installjscodeshift.png"),
  installReactMods: require("./assets/images/installreactcodemod.png"),
  runReactMods: require("./assets/images/runcodemods.png"),
  beerArrow: require("./assets/images/beerarrow.png"),
  flow: require("./assets/images/flow.png"),
  flowUpgrade: require("./assets/images/flowupgrade.png"),
  tree: require("./assets/images/tree.png"),
  propsDestination: require("./assets/images/propsdestination.png"),
  propsTravel: require("./assets/images/propstravel.png"),
  propsArrive: require("./assets/images/propsarrive.png"),
  treeContext: require("./assets/images/treecontext.png"),
  styledComponents: require("./assets/images/styledcomponents.png"),
  router: require("./assets/images/router.png"),
  redux: require("./assets/images/redux.png"),
  dontUseContext: require("./assets/images/dontusecontext.png"),
  dontUpdateContext: require("./assets/images/dontupdatecontext.png"),
  broadcast: require("./assets/images/broadcast.png")
};

const FunHeading = styled(Heading)`
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: none;
  font: normal 84px/normal "Anton", Helvetica, sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  text-shadow: 1px 1px 0 #61dafb, 2px 2px 0 #cecece, 3px 3px 0 #61dafb, 4px 4px 0 #333333;
`;

const createClassSnippet = `

const App = React.createClass({
  render() {
    return <div></div>;
  }
});
`;

const extendsClassSnippet = `
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}
`;

const bindThisSnippet = `
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = 
      this.handleClick.bind(this);
  }
  handleClick() { // Do thing }
}
`;

const arrowPropertyInitializerSnippet = `
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => { // do thing}
}
`;

const LargeCodePane = styled(CodePane)`
  font-size: 2.5rem !important;
`;

const hoistNonReactStaticSnippet = `
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
`;

const decoratorsSnippet = `

`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgImage={images.splash}>
          <Heading size={6} fit caps textColor="primary" margin={10} padding={"5px 0"}>
            React
          </Heading>

          <Heading size={6} fit caps textColor="priamry" margin="10px 0 50px 0" padding={"5px 0"}>
            the <BlueHighlightBlock>BAD</BlueHighlightBlock> parts
          </Heading>
          <Layout>
            <Fill>
              <Heading size={6} caps textColor="secondary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                Marcel Cutts
              </Heading>
            </Fill>
            <Fill>
              <Heading size={6} caps textColor="secondary" bgColor="tertiary" margin={10} padding={"5px 0"}>
                <TwitterBlock>
                  @marcelcutts
                  <Image src={images.twitter} height="30px" margin="5px 0 0 5px" />
                </TwitterBlock>
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        {/* Your shit is crap | Dan abramov tweet | View represent that of my employer */}

        <Slide transition={["slide"]}>
          <Appear>
            <Heading size={2} caps lineHeight={1} textColor="secondary">
              My views are my own
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps lineHeight={1} margin="50px 0" textColor="secondary">
              and
            </Heading>
          </Appear>
          <Appear>
            <Heading size={2} caps lineHeight={1} textColor="secondary">
              represent the views of my employer
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Your shit
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            is <BlueHighlightBlock>crap</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Joking (mostly)
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Great ideas!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            ♻️️ Components!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🏎 Virtual DOM!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🔍 Representation of State!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🖌 Renderers!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🛠 Tooling!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            rise to <BlueHighlightBlock>dominance</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.stateOfJs} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Continuing progress!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            ♻️️ Fiber!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🏎 Async Rendering!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🖌 Portals!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🔍 Fragments!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            No close competitors
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="#42b983">
            Vue
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.stateOfJs} />

        {/*Promised you gripes!*/}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            is certainly <BlueHighlightBlock>not perfect</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="priamry">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            web dev is
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            maddening
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.rocket} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Frustrations
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            (And how to mitigate them)
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            (Highly opinionated)
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            🔥
          </Heading>
        </Slide>

        {/* Joke about wanting to change the world but
         here we are trying to get buttons
         to centre for a dom that doesnt wanna play */}

        {/* CHURN */}

        <Slide transition={["slide"]} bgColor="primary">
          <FunHeading fit caps textColor="tertiary" margin={10}>
            Churn
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            javascript Fatigue
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            is not a thing
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.devops} />

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} caps lineHeight={1} margin={"50px 0"} textColor="secondary">
            <BlueHighlightBlock>Syntax</BlueHighlightBlock> Churn
          </Heading>
          <Heading size={2} caps lineHeight={1} margin={"50px 0"} textColor="secondary">
            <BlueHighlightBlock>Package</BlueHighlightBlock> Churn
          </Heading>
          <Heading size={2} caps lineHeight={1} margin={"50px 0"} textColor="secondary">
            <BlueHighlightBlock>Tooling</BlueHighlightBlock> Churn
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Syntax
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Churn
          </Heading>
        </Slide>

        <Magic>
          <Slide bgColor="#2a2734">
            <LargeCodePane source={createClassSnippet} lang="javascript" />
          </Slide>
          <Slide bgColor="#2a2734">
            <LargeCodePane source={extendsClassSnippet} lang="javascript" />
          </Slide>
        </Magic>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            OK - so just change it?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            You whine a lot.
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} fit lineHeight={1} margin={"50px 0"} textColor="tertiary">
            Too complex for find+replace
          </Heading>
          <Heading size={6} caps lineHeight={1} textAlign="left" margin={"50px 0"} textColor="secondary">
            Mixins don't work any more
          </Heading>
          <Heading size={6} caps lineHeight={1} textAlign="left" margin={"50px 0"} textColor="secondary">
            `this` is not auto-bound
          </Heading>
          <Heading size={6} caps lineHeight={1} textAlign="left" margin={"50px 0"} textColor="secondary">
            Constructors require care
          </Heading>
          <Heading size={6} caps lineHeight={1} textAlign="left" margin={"50px 0"} textColor="secondary">
            ...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Large codebase
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Big Bang vs. Gradual
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Gradual Update
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            + No big disruption
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Complete in time?
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Mixed codebase
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Hacky solutons
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Developer fear / stress
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Big Bang
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            + Less total disruptioon
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            + Clean codebase
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Feature velocity
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Confidence in codebase
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Conflicts am become god
          </Heading>
        </Slide>

        {/* Stress marcel */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Big Bang
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Done <BlueHighlightBlock>instantly.</BlueHighlightBlock>
          </Heading>
        </Slide>

        {/* why annoy? either mixed codebase mess, performance, mixins, big work, conflicts */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Codemods!
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Libraries to assist in <BlueHighlightBlock>large scale refactors</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Codemods!
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            👌 Made here
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🧓 Been around a while
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🐍 Written in Python
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JSCodeShift!
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            toolkit for running codemods over multiple JS files
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Loads pre-made!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Lets do an example...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Arrow Property Initializer
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            = () =>
          </Heading>
        </Slide>

        <Magic>
          <Slide bgColor="#2a2734">
            <LargeCodePane source={bindThisSnippet} lang="javascript" />
          </Slide>
          <Slide bgColor="#2a2734">
            <LargeCodePane source={arrowPropertyInitializerSnippet} lang="javascript" />
          </Slide>
        </Magic>

        {/* Hard to find and replace */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Can JSCodeShift <BlueHighlightBlock>Modernise</BlueHighlightBlock>
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            beer management? 🍺
          </Heading>
        </Slide>

        {/* Look at application */}

        <Slide transition={["slide"]} bgImage={images.beerBindThis} />

        {/* Look at browser */}

        <Slide transition={["slide"]} bgImage={images.installJsCodeShift} />

        <Slide transition={["slide"]} bgImage={images.installReactMods} />

        <Slide transition={["slide"]} bgImage={images.runReactMods} />

        <Slide transition={["slide"]} bgImage={images.beerArrow} />

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Boring!
          </Heading>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            React syntax has settled
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Image src={images.flow} height="100%" />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.flowUpgrade} />

        {/* Maybe talk about reasonml elm */}

        {/* Happy marcel pic */}

        {/* CONTEXT */}

        <Slide transition={["slide"]} bgColor="primary">
          <FunHeading fit caps textColor="tertiary" margin={10}>
            Context
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Context
          </Heading>
          <Heading fit caps lineHeight={1} textColor="secondary">
            Pass data through the component tree <BlueHighlightBlock>without props</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            React Tree
          </Heading>
          <Image src={images.tree} height="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Passing Props
          </Heading>
          <Image src={images.propsDestination} height="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Passing Props
          </Heading>
          <Image src={images.propsTravel} height="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Passing Props
          </Heading>
          <Image src={images.propsArrive} height="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Context
          </Heading>
          <Image src={images.treeContext} height="500px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Super useful!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Example: <BlueHighlightBlock>Translations</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            This sounds great...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Are you going to be a dick and
          </Heading>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            ruin it?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Yes
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <BlockQuote>
            <Quote textColor="secondary" textSize="48">
              {" "}
              The vast majority of applications do not need to use context. If you want your application to be stable,
              don’t use context. It is an experimental API and it is likely to break in future releases of React.
            </Quote>
            <Cite>Like, "The Man" (React Docs)</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.dontUseContext} />

        <Slide transition={["slide"]} bgImage={images.dontUpdateContext} />

        <Slide transition={["slide"]} bgColor="primry">
          <Heading size={1}>🇬🇧 ↔️ 🇫🇷 </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            But everyone
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            uses it!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primry">
          <Image src={images.redux} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primry">
          <Image src={images.router} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primry">
          <Image src={images.styledComponents} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} margin={"50px 0"} textColor="secondary">
            I want the <BlueHighlightBlock>availability</BlueHighlightBlock>
          </Heading>
          <Heading size={5} caps lineHeight={1}  margin={"50px 0"} textColor="secondary">
            I want it to be <BlueHighlightBlock>updatable</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Small? Try <BlueHighlightBlock>Pub/Sub</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.broadcast} />

        {/* HIGHER ORDER COMPONENTS */}

        <Slide transition={["slide"]} bgColor="primary">
          <FunHeading fit caps textColor="tertiary" margin={10}>
            Higher Order
          </FunHeading>

          <FunHeading fit caps textColor="tertiary" margin={10}>
             Components
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Higher Order Components
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            A function that takes a component and returns a new component
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Higher order components
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            ♻️️ Great for code reuse
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            🆕 Replace mixins
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            📚 Composition, not inheritance
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Functional
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Like the <BlueHighlightBlock>cool kids</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Recognise this from your favourite libraries?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Router: <BlueHighlightBlock>withRouter()</BlueHighlightBlock>
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Grab router from context
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            {"Pass down to <WrappedComponent> as prop"}
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Decorators <BlueHighlightBlock>@</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            This sounds great!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Why are you complaining?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="Tertiary">
            Ceremony
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Hoist over static properties
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Ref callbacks (not _really_ a prop)
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - New component layer each time
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <LargeCodePane source={hoistNonReactStaticSnippet} lang="javascript" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            Indirection
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            A component shows <BlueHighlightBlock>incorrect data</BlueHighlightBlock>
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Component is wrapped by 3 higher order components
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Which higer order component(s) are wrong?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            Naming
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Two higher order components are applied
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Both want to apply a value to prop.beerLeft
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Last one wins.
          </Heading>
          <Heading size={5} lineHeight={1} textColor="secondary">
            Two higher order components are applied
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Lifecycle drawbacks
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Composition is static
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Can't wrap component in render 💥
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Can't utilise lifecycle methods
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            In short
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Harder to track props
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Debugging is harder
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            - Can lead to subtle errors
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Is there anything <BlueHighlightBlock>better?</BlueHighlightBlock>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Render props
          </Heading>
        </Slide>

        {/* Higher orer function} */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Declarative, yay! Encapsulate logic DRY
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Indirection static vs dynamic composition naming collison Stack -> mess to test
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Render props
          </Heading>
        </Slide>

        {/* Unsolved frustrations *
           - Router
           - Fucking style libs
           - Bickering
           - Conflating 
          */}

        {/* In the end the non prescriptive native lets us solve our own problems */}

        {/* hopefully we won't have to bother making forms or styles, those skills and roles and we can move onto projects that matter like a  */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
