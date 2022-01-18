import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";
import { Button } from "antd";
import { spellPropsType } from "../store/interfaces/spellPropsType";

export const FavouriteButton = (props: spellPropsType) => {
  const dispatch = useDispatch();
  const { type, details } = props;

  const { addFav } = bindActionCreators(actionCreators, dispatch);
  return (
    <Button type="primary" onClick={() => addFav(details)}>
      {type}
    </Button>
  );
};

export const DeleteButton = (props: spellPropsType) => {
  const dispatch = useDispatch();
  const { type, id } = props;

  const { delFav } = bindActionCreators(actionCreators, dispatch);
  return (
    <Button type="primary" onClick={() => delFav(id!)}>
      {type}
    </Button>
  );
};
