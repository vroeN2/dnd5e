import { Col } from "antd";
import components from ".";
import { spellPropsType } from "../store/interfaces/spellPropsType";

const Spell = (props: spellPropsType): JSX.Element => {
  const { SpellCard, FavouriteButton } = components;
  const { type, details, id } = props;

  return (
    <Col xs={20} sm={10} md={8} lg={6}>
      <SpellCard
        className="text-center"
        key={details.index}
        title={details.name}
      >
        <div className="spell-description">{details.desc}</div>
        <FavouriteButton details={details} id={id} type={type}>
          {type}
        </FavouriteButton>
      </SpellCard>
    </Col>
  );
};

export default Spell;
