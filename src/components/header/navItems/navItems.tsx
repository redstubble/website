import React from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import ReactCardFlip from "react-card-flip";
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";
import PageType from "../../utils/pageType";
import { updatePageState, updatePostState } from "../../redux-actions";

const CustomIcon = styled(Icon)`
  background-color: "#fff";
  border-bottom-left-radius: 3.5rem;
  border-top-left-radius: 3.5rem;
`;

const ButtonFront = styled(Button)`
  &&& {
    border-radius: inherit;
    border-radius: 3.5rem;
    color: #fff;
    background-color: ${(props: any) => props.colorprop};
    &:hover {
      background-color: ${(props: any) => props.colorprop};
      color: #fff;
    }
  }
`;

const ButtonBack = styled(ButtonFront)`
  &&& {
    border-radius: inherit;
    border-width: 3px;
    border-style: solid;
    border-color: ${(props: any) => props.colorprop};
    color: ${(props: any) => props.colorprop};
    background-color: #fff;
    &:hover {
      color: ${(props: any) => props.colorprop};
      background-color: #fff;
    }
  }
`;

type NavItemProps = {
  post: any;
  type: any;
  title: any;
  color: any;
  page: any;
};

function NavItem({ type, title, color, post, page }: NavItemProps) {
  const dispatch = useDispatch();

  if (!post) {
    return (
      <ReactCardFlip isFlipped={page === type}>
        <ButtonFront
          colorprop={color}
          key="front"
          size="large"
          onClick={() => {
            dispatch(updatePostState(null));
            dispatch(updatePageState(type));
          }}
        >
          {title}
        </ButtonFront>
        <ButtonBack
          colorprop={color}
          key="back"
          size="large"
          onClick={() => {
            if (!post) {
              dispatch(updatePageState(PageType.index));
            }
            dispatch(updatePostState(null));
          }}
        >
          {title}
        </ButtonBack>
      </ReactCardFlip>
    );
  }
  return (
    <ButtonBack
      colorprop={color}
      size="large"
      onClick={() => {
        dispatch(updatePostState(null));
        if (!post) {
          dispatch(updatePageState(PageType.index));
        }
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }}
      labelPosition="left"
      icon
    >
      {title}
      <CustomIcon style={{ backgroundColor: "#fff" }} name="left arrow" />
    </ButtonBack>
  );
}
export { NavItem };
