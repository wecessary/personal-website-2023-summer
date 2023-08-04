import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

interface Props {
  title: string;
  sectionId: string;
  content: string[];
  accordionId: string;
  isContentBullets?: boolean | undefined;
}

export default function Accordion({
  title,
  sectionId,
  accordionId,
  content,
  isContentBullets,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const elementWidth =
    "w-full md:w-[600px] lg:w-[625px] xl:w-[650px] 2xl:w-[675px]";
  const contentStyles = isOpen ? "block" : "hidden";
  function handleOnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <h3 className={`${elementWidth}`}>
        <button
          onClick={handleOnClick}
          aria-expanded={isOpen}
          aria-controls={sectionId}
          id={accordionId}
          className="w-full py-4 flex justify-between gap-x-10 border-t-2 border-gray-200"
        >
          <span className="flex-1 text-left text-gray-800 text-lg lg:text-xl">
            {title}
          </span>
          <span className="basis-6">
            <PlusIcon className={`transition-all ${isOpen && "rotate-45"}`} />
          </span>
        </button>
      </h3>
      <div
        class={`${contentStyles} ${elementWidth} mb-2`}
        id={sectionId}
        role="region"
        aria-labelledby={accordionId}
      >
        {isContentBullets ? (
          <ul class="list-inside list-disc">
            {content.map((item) => (
              <li className="mt-2 lg:text-lg text-gray-500">{item}</li>
            ))}
          </ul>
        ) : (
          content.map((item) => (
            <p className="mt-2 lg:text-lg text-gray-500">{item}</p>
          ))
        )}
      </div>
    </>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <title>Plus Icon</title>
      <path
        d="M15.76 10.6078C15.76 11.1513 15.3252 11.5861 14.7818 11.5861H10.8687V15.2818C10.8687 15.8252 10.4339 16.26 9.89045 16.26C9.34698 16.26 8.91219 15.8252 8.91219 15.2818V11.5861H5.21654C4.67306 11.5861 4.23828 11.1513 4.23828 10.6078C4.23828 10.0644 4.67306 9.62959 5.21654 9.62959H8.91219V5.71654C8.91219 5.17306 9.34698 4.73828 9.89045 4.73828C10.4339 4.73828 10.8687 5.17306 10.8687 5.71654V9.62959H14.7818C15.3252 9.62959 15.76 10.0644 15.76 10.6078Z"
        fill="#1f2937"
      />
    </svg>
  );
}
