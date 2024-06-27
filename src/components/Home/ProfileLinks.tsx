export const ProfileLinks = () => {
  return (
    <aside className="ml-auto flex flex-col space-y-3 border-y-default border-l-default border-solid border-primary bg-white px-1.5 py-2 shadow-[-2px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <button>
        <img src="/assets/icons/github.png" className="w-6" />
      </button>
      <button>
        <img src="/assets/icons/linkedin.png" className="w-6" />
      </button>
      <button>
        <img src="/assets/icons/resume.png" className="w-6" />
      </button>
    </aside>
  );
};
