import { FC, useState } from "react"
import { IData } from "../data/data"
import "../styles/Folder.css";

interface FolderProps {
    data: IData;
}

export const Folder: FC<FolderProps> = ({data}) => {
    const [expand, setExpand] = useState<boolean>(false);


    if(data.isFolder) {
    return (
        <>
            <div>
                <div onClick={() => setExpand(!expand)} style={{cursor: 'pointer'}}>
                    <span>📂 {data.name}</span>
                </div>
                <div className="inside-folder" style={{display: expand ? 'flex' : 'none'}}>
                    {data.items.map((exp) => {
                        return (
                            // <span key={exp.id}>{exp.name}</span>
                            <Folder data={exp}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
} else {
    return <span>🗒️ {data.name} </span>
}
}