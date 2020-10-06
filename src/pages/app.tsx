import { h } from "preact";
import { useState } from "preact/compat";
import { styled } from "goober";

interface PassedProps {}

interface ContainerProps {
  state: boolean;
  setState: (state: boolean) => void;
}

interface Props extends PassedProps, ContainerProps {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
    <svg
      className="menu"
      width="250"
      height="250"
      viewBox="0 0 500 500"
      onClick={() => {
        props.setState(!props.state);
      }}
    >
      <path
        className="border1 border"
        d="M44.6,151.6h409.9c18.9,0,34.2-15.2,34.2-34.1c0-18.8-15.3-34-34.2-34H44.6c-18.8,0-34.1,15.2-34.1,34 C10.4,136.4,25.7,151.6,44.6,151.6z"
      />
      <path
        className="border2 border"
        d="M454.5,219.9H44.5c-18.8,0-34.1,15.3-34.1,34.1c0,18.9,15.3,34.2,34.1,34.2h409.9c18.9,0,34.2-15.3,34.2-34.2 C488.7,235.2,473.3,219.9,454.5,219.9z"
      />
      <path
        className="border3 border"
        d="M454.5,356.7H44.5c-18.8,0-34.1,15.2-34.1,34.1c0,18.8,15.3,34.1,34.1,34.1h409.9c18.9,0,34.2-15.3,34.2-34.1 S473.3,356.7,454.5,356.7z"
      />
    </svg>
  </div>
);

const StyledComponent = styled(Component)<ContainerProps>`
  & > .menu {
    .border {
      fill: ${(props) => (props.state ? "#890a0c" : "rgb(0, 0, 0)")};
      transition: 200ms all ease;
      transform-origin: center;
    }
    .border1 {
      transform: ${(props) =>
        props.state ? "translate(-102px, 102px) rotate(45deg)" : "initial"};
    }
    .border2 {
      opacity: ${(props) => (props.state ? 0 : 1)};
    }

    .border3 {
      transform: ${(props) =>
        props.state ? "translate(-102px, -102px) rotate(-45deg);" : "initial"};
    }
  }
`;

const ContainerComponent = () => {
  const [state, setState] = useState(false);
  const containerProps = { state, setState };
  return <StyledComponent {...containerProps}></StyledComponent>;
};

export const App = ContainerComponent;
