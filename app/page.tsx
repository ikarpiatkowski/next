import React, { Suspense } from "react";
import TodoList from "./todos/TodoList";
function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
      <Suspense
        fallback={<p className="text-blue-500">Loading the Todos 2...</p>}
      >
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <TodoList />
        </div>
      </Suspense>
    </div>
  );
}

export default Home;
