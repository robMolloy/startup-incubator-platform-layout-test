import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [itemCount, setItemCount] = useState(250);
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollableElm = scrollableContentRef.current;
    if (scrollableElm) scrollableElm.scrollTop = scrollableElm.scrollHeight;
  }, [itemCount]);

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-48 p-4">Side Panel</div>

      <div className="flex flex-col w-full h-full">
        <div className="bg-blue-500 text-white p-4 text-center flex-shrink-0">
          Header Bar
        </div>

        <div className="flex flex-col flex-grow h-0">
          <div
            ref={scrollableContentRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-500"
          >
            <button onClick={() => setItemCount((x) => x + 1)}>click me</button>
            <p>This is the scrollable content area. Add your content here.</p>
            {[...Array(itemCount)].map((x, j) => (
              <p key={`ha-${j}`}>
                {j}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque a dictum felis. Integer porttitor orci vel dolor
                tincidunt, nec aliquam purus consectetur.
              </p>
            ))}
          </div>

          <div className="bg-gray-300 p-4 flex-shrink-0 flex justify-center">
            <input
              type="text"
              placeholder="Enter your text here..."
              className="w-4/5 p-2 border border-gray-400 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
