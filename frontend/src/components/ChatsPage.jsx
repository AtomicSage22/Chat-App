import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId="
            e10021c2-1ca3-4948-bb8d-b095eecb241d"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: "100%" }}
        />
    </div>;
  };
  export default ChatsPage;