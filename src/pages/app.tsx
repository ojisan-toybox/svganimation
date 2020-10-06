import { h } from "preact";
import { styled } from "goober";

interface PassedProps {}

interface ContainerProps {}

interface Props extends PassedProps, ContainerProps {
  className?: string;
}

const Component = (props: Props) => (
  <div className={props.className}>
    <svg className="menu" width="250px" height="250px" viewBox="0 0 500 500">
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

const StyledComponent = styled(Component)`
  & > .menu {
    .border {
      fill: rgb(0, 0, 0);
      transition: 200ms all ease;
      transform-origin: 250px 250px;
    }
    &:hover {
      .border {
        fill: #890a0c;
      }
      /* 1本目のボーダーは、ホバー時に回転させる */
      .border1 {
        transform: translate(-102px, 102px) rotate(45deg);
      }
      /* 2本目のボーダーは、ホバー時に透明にする */
      .border2 {
        opacity: 0;
      }
      .border3 {
        transform: translate(-102px, -102px) rotate(-45deg);
      }
    }
  }
`;

const ContainerComponent = () => {
  return <StyledComponent></StyledComponent>;
};

export const App = ContainerComponent;
