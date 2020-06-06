import React from "react";
import APIHandler from "./../api/handler";

const handler = new APIHandler();

export default function Home() {
  handler
    .get("./")
    .then((apiRes) => console.log(apiRes.data))
    .catch((apiErr) => console.log(apiErr));

  return (
    <div>
      <h1 className="title">Homepage</h1>
    </div>
  );
}
