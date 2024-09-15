import { FC, useState } from "react";
import { IData } from "../data/data";
import "../styles/Folder.css";

interface FolderProps {
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}

export const Folder: FC<FolderProps> = ({ data, setData }) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleAdd = (clicked: IData, isFolder: boolean) => {
    let obj: IData = {
      id: Date.now(),
      name: "test",
      isFolder: isFolder, // false for testing
      items: [],
    };

    if (data.id === clicked.id) {
      data.items.push(obj);
    } else {
      data.items.map((i) => {
        if (i.id === clicked.id) {
          i.items.push(obj);
        }
      });
    }

    setData(data);
  };

  if (data.isFolder) {
    return (
      <>
        <div style={{ marginTop: 5 }}>
          <div
            className="folder"
            onClick={() => setExpand(!expand)}
            style={{ cursor: "pointer" }}
          >
            <span>📂 {data.name}</span>
            <div className="container">
              <button onClick={() => handleAdd(data, true)}>+ Folder</button>
              <button onClick={() => handleAdd(data, false)}>+ File</button>
            </div>
          </div>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            {data.items.map((exp) => {
              return (
                // <span key={exp.id}>{exp.name}</span>
                <Folder data={exp} setData={setData} key={exp.id} />
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <span className="file">🗒️ {data.name} </span>;
  }
};
