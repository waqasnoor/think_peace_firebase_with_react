import React, { useState } from "react";

import Posts from "./Posts";
import Authentication from "./Authentication";

const Application = () => {
  const [isLoading] = useState(false);

  return (
    <main className="Application">
      <h1>Think Piece</h1>
      <Authentication loading={isLoading} />
      <Posts />
    </main>
  );
};

export default Application;
