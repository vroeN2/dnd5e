import { useState, useRef, useEffect } from "react";
import components from ".";
import { Space, Row } from "antd";
import { spellType } from "../store/interfaces/spellType";
import { ActionType } from "../store/action-types";

const SpellList = () => {
  const { Spell, Search } = components;

  const firstUpdate = useRef(true);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchR, setSearchR] = useState<spellType[]>([]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setIsPending(true);
    const abortCont = new AbortController();

    let initialUrl = `https://www.dnd5eapi.co/api/spells/`;
    let url = initialUrl + searchTerm;

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unfortunately we can't find a spell with that name :(");
        }
        return res.json();
      })
      .then((data: spellType[]) => {
        setSearchR(
          data.filter((spell) =>
            spell.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [searchTerm]);

  return (
    <div className="main__wrapper">
      <Space direction="vertical">
        <Row>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="response__wrapper">
            <div className="heading">
              <div className="heading__text text-center display-3">
                List of spells
              </div>
            </div>
          </div>
        </Row>
        {!firstUpdate.current && isPending && (
          <p className="lead p-4">loading...</p>
        )}

        {!isPending && error && <h2 className="text-center mt-5">{error}</h2>}

        {!isPending && (
          <Space className="p-0">
            <Row gutter={[8, 8]}>
              {!error &&
                searchR.map((item, index) => (
                  <Spell details={item} type={ActionType.FAV} key={index} />
                ))}
            </Row>
          </Space>
        )}
      </Space>
    </div>
  );
};

export default SpellList;
