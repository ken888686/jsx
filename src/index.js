import React from "react";
import { createRoot } from "react-dom/client";
import { faker } from "@faker-js/faker/locale/zh_TW";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.fullName()}
          date={faker.date.past().toLocaleDateString()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.fullName()}
          date={faker.date.past().toLocaleDateString()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.fullName()}
          date={faker.date.past().toLocaleDateString()}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
