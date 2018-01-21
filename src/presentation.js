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
  devops: require("./assets/images/devops.png")
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
import React from 'react';

const App = React.createClass({
  render() {
    return <div></div>;
  }
});

export default App;
`;

const extendsClassSnippet = `
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>;
  }
}

export default App;
`;

const LargeCodePane = styled(CodePane)`
  font-size: 2.4rem !important;
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
              <Heading size={6} caps textColor="primary" bgColor="tertiary" margin={10} padding={"5px 0"}>
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
            Continuing progrss!
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
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Syntax Churn
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
            Made here
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Been around a while
          </Heading>
          <Heading caps size={5} textAlign="left" textColor="secondary" margin={"30px 0 0 50px"}>
            Written in 🐍
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Loads pre made!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Lets have an example...
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Class bind this (sneakily got rid of impliciting binding)
          </Heading>
        </Slide>

        {/* Hard to find and replace */}

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Find react
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Bind to arrow
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Do the thing
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Many things for incremental package updates
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            flow upgrade
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Package churn
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            All these packages! Hard to keep them all together
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ....ReasonML (hot reload, built in styles, compiler)
          </Heading>
        </Slide>

        {/* CONTEXT */}

        <Slide transition={["slide"]} bgColor="primary">
          <FunHeading fit caps textColor="tertiary" margin={10}>
            Context
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is it
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Super useful, give translation example
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dont use it!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ....But everyone does?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            ...But you can't soon!
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Locale example
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            So pub sub uWu
          </Heading>
        </Slide>

        {/* HIGHER ORDER COMPONENTS */}

        <Slide transition={["slide"]} bgColor="primary">
          <FunHeading fit caps textColor="tertiary" margin={10}>
            Higher Order Components
          </FunHeading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is it
          </Heading>
        </Slide>

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
